import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { Box, Grid, styled } from '@mui/material';
import NiyamSelect from './fields/NiyamSelect';
import NiyamProgressInput from './fields/NiyamProgressInput';
import AddNiyamProgressSubmitButton from './fields/AddNiyamProgressSubmitButton';
import useUpdateNiyamProgress, {
  NiyamFormSubmission,
} from '../../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress';
import { Niyam } from '../../../config/niyams';
import snackbarAtom, { SnackbarStatus } from '../../ProgressTrackersPage/Snackbar/snackbarAtom';
import AgeGroupSelect from './fields/AgeGroupSelect';
import { AgeGroupOptions } from './fields/AgeGroupSelect/AgeGroupSelect';

const FormContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    maxWidth: '500px',
  },
}));

export type NiyamFormInputs = {
  niyam: Niyam;
  progressEntered: number;
  ageGroup: AgeGroupOptions;
};

function AddNiyamProgressForm(): JSX.Element {
  const { control, handleSubmit } = useForm<NiyamFormInputs>();

  const { execute, status } = useUpdateNiyamProgress();
  const setSnackbarState = useSetRecoilState(snackbarAtom);

  const navigate = useNavigate();

  async function onSubmitHandler(data: NiyamFormInputs) {
    try {
      const formSubmission: NiyamFormSubmission = {
        niyam: data.niyam,
        progress: data.progressEntered,
        ageGroup: data.ageGroup,
      };
      await execute(formSubmission);
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

  return (
    <Box mt={3}>
      <form data-testid='add-niyam-progress-form' onSubmit={handleSubmit(onSubmitHandler)}>
        <FormContainer container spacing={2} direction='column'>
          <NiyamSelect name='niyam' control={control} rules={{ required: 'Select a niyam' }} />
          <NiyamProgressInput name='progressEntered' control={control} rules={{ min: 0, required: 'Enter a number' }} />
          <AgeGroupSelect name='ageGroup' control={control} rules={{ required: 'Select your age group' }} />
          <AddNiyamProgressSubmitButton loading={status === 'loading'} />
        </FormContainer>
      </form>
    </Box>
  );
}

export default AddNiyamProgressForm;
