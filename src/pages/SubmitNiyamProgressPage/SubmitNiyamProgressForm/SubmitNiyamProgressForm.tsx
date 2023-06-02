import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useForm, useWatch } from 'react-hook-form';
import { Box, Grid, styled } from '@mui/material';
import NiyamSelect from './fields/NiyamSelect';
import NiyamProgressInput from './fields/NiyamProgressInput';
import SubmitNiyamProgressSubmitButton from './fields/SubmitNiyamProgressSubmitButton';
import useUpdateNiyamProgress, {
  NiyamFormSubmission,
} from '../../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress';
import { Niyam } from '../../../config/niyams';
import snackbarAtom, { SnackbarStatus } from '../../ProgressTrackersPage/Snackbar/snackbarAtom';
import AgeGroupSelect from './fields/AgeGroupSelect';
import { AgeGroupOptions, ageGroups } from './fields/AgeGroupSelect/AgeGroupSelect';
import GenericTextInput from './fields/GenericTextInput';
import React from 'react';
import ConfirmSubmissionDialog from './ConfirmSubmissionDialog';

const FormContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    maxWidth: '500px',
  },
}));

export type NiyamFormInputs = {
  niyam: Niyam;
  progressEntered: number;
  ageGroup: AgeGroupOptions;
  fullName: string;
  mandirName: string;
};

function isAgeGroup(maybeAgeGroup: unknown): maybeAgeGroup is AgeGroupOptions {
  return typeof maybeAgeGroup === 'string' && ageGroups.includes(maybeAgeGroup as AgeGroupOptions);
}

function AddNiyamProgressForm(): JSX.Element {
  const [confirmDialogOpen, setConfirmDialogOpen] = React.useState(false);
  const [submissionData, setSubmissionData] = React.useState<NiyamFormSubmission | null>(null);

  const ageGroupCached = localStorage.getItem('ageGroup');

  const { control, handleSubmit } = useForm<NiyamFormInputs>({
    defaultValues: {
      ageGroup: isAgeGroup(ageGroupCached) ? (ageGroupCached as AgeGroupOptions) : undefined,
      fullName: localStorage.getItem('fullName') ?? '',
      mandirName: localStorage.getItem('mandirName') ?? '',
    },
  });
  const [selectedNiyam] = useWatch({
    control,
    name: ['niyam'],
  });

  const { execute, status } = useUpdateNiyamProgress();
  const setSnackbarState = useSetRecoilState(snackbarAtom);

  const navigate = useNavigate();

  function cacheFieldValues(data: NiyamFormInputs) {
    localStorage.setItem('ageGroup', data.ageGroup);
    localStorage.setItem('fullName', data.fullName);
    localStorage.setItem('mandirName', data.mandirName);
  }

  async function onConfirmSubmission() {
    try {
      await execute(submissionData!);
      setSnackbarState({
        message: 'You have successfully registered your niyam progress!',
        open: true,
        status: SnackbarStatus.successful,
      });
      navigate('/');
    } catch {
      setSnackbarState({
        message: 'Something went wrong whilst registering your niyam progress. Please try again later.',
        open: true,
        status: SnackbarStatus.error,
      });
      navigate('/');
    }
  }

  function onCancel() {
    setConfirmDialogOpen(false);
  }

  async function onSubmitHandler(data: NiyamFormInputs) {
    cacheFieldValues(data);

    const formSubmission: NiyamFormSubmission = {
      niyam: data.niyam,
      progress: data.progressEntered,
      ageGroup: data.ageGroup,
      fullName: data.fullName,
      mandirName: data.mandirName,
    };
    setSubmissionData(formSubmission);
    setConfirmDialogOpen(true);
  }

  return (
    <Box mt={3}>
      <form data-testid='add-niyam-progress-form' onSubmit={handleSubmit(onSubmitHandler)}>
        <FormContainer container spacing={2} direction='column'>
          <NiyamSelect name='niyam' control={control} rules={{ required: 'Select a niyam' }} />
          <NiyamProgressInput
            name='progressEntered'
            control={control}
            rules={{
              min: 1,
              required:
                selectedNiyam && selectedNiyam.timeBased === true
                  ? 'Enter the number of minutes you have spent on the selected niyam'
                  : 'Enter your progress on the selected niyam',
            }}
            selectedNiyam={selectedNiyam}
          />
          <GenericTextInput
            id='full-name-input'
            label='Full name'
            name='fullName'
            control={control}
            rules={{ required: 'Enter your full name' }}
          />
          <GenericTextInput
            id='mandir-name-input'
            label='Mandir name'
            name='mandirName'
            control={control}
            rules={{ required: 'Enter which mandir you usually attend' }}
          />
          <AgeGroupSelect name='ageGroup' control={control} rules={{ required: 'Select your age group' }} />
          <Grid item container justifyContent='flex-end'>
            <SubmitNiyamProgressSubmitButton loading={status === 'loading'} />
          </Grid>
        </FormContainer>
      </form>
      {confirmDialogOpen === true ? (
        <ConfirmSubmissionDialog
          open={confirmDialogOpen}
          handleCancel={onCancel}
          handleOk={onConfirmSubmission}
          formSubmission={submissionData!}
        />
      ) : null}
    </Box>
  );
}

export default AddNiyamProgressForm;
