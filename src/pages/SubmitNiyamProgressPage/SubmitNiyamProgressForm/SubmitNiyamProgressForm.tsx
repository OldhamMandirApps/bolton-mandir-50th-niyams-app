import { useSetRecoilState } from 'recoil';
import { useForm, useWatch } from 'react-hook-form';
import { Alert, Box, Grid, InputAdornment, Tab, Tabs, TextField, Typography, styled } from '@mui/material';
import NiyamProgressInput from './fields/NiyamProgressInput';
import SubmitNiyamProgressSubmitButton from './fields/SubmitNiyamProgressSubmitButton';
import useUpdateNiyamProgress, {
  NiyamFormSubmission,
} from '../../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress';
import { Niyam, niyams } from '../../../config/niyams';
import snackbarAtom, { SnackbarStatus } from '../../ProgressTrackersPage/Snackbar/snackbarAtom';
import { AgeGroupOptions } from './fields/AgeGroupSelect/AgeGroupSelect';
import GenericTextInput from './fields/GenericTextInput';
import React from 'react';
import ConfirmSubmissionDialog from './ConfirmSubmissionDialog';
import NumberStepperControls from './fields/NumberStepperControls';

const DEFAULT_NIYAM = niyams[0];
const DEFAULT_AGE_GROUP: AgeGroupOptions = 'Not collected';
const DEFAULT_MANDIR_NAME = 'Not collected';
const MALA_SIZE = 108;
type EntryMode = 'naamJap' | 'mala';
type FormFeedback = {
  message: string;
  status: 'error' | 'success';
};

const FormContainer = styled(Grid)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '560px',
  },
}));

const FormCard = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '640px',
  border: '1px solid rgba(174, 52, 8, 0.12)',
  borderRadius: '28px',
  background: 'linear-gradient(145deg, rgba(255, 253, 247, 0.96) 0%, rgba(255, 246, 224, 0.92) 100%)',
  boxShadow: '0 24px 70px rgba(96, 46, 10, 0.16)',
  padding: '28px',
  [theme.breakpoints.down('sm')]: {
    borderRadius: '22px',
    padding: '20px',
  },
}));

const EntryModePanel = styled(Box)(({ theme }) => ({
  border: '1px solid rgba(205, 144, 72, 0.35)',
  borderRadius: '22px',
  background: 'rgba(255, 255, 255, 0.72)',
  padding: '20px',
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },
}));

export type NiyamFormInputs = {
  niyam: Niyam;
  progressEntered: number;
  ageGroup: AgeGroupOptions;
  fullName: string;
  mandirName: string;
};

function AddNiyamProgressForm(): JSX.Element {
  const [confirmDialogOpen, setConfirmDialogOpen] = React.useState(false);
  const [submissionData, setSubmissionData] = React.useState<NiyamFormSubmission | null>(null);
  const [submissionMode, setSubmissionMode] = React.useState<EntryMode | null>(null);
  const [formFeedback, setFormFeedback] = React.useState<FormFeedback | null>(null);
  const [entryMode, setEntryMode] = React.useState<EntryMode>('naamJap');
  const [malaInput, setMalaInput] = React.useState('');

  const { control, handleSubmit, resetField } = useForm<NiyamFormInputs>({
    defaultValues: {
      niyam: DEFAULT_NIYAM,
      ageGroup: DEFAULT_AGE_GROUP,
      fullName: localStorage.getItem('fullName') ?? '',
      mandirName: DEFAULT_MANDIR_NAME,
    },
    shouldUnregister: true,
  });

  const { execute, status } = useUpdateNiyamProgress();
  const setSnackbarState = useSetRecoilState(snackbarAtom);

  const malaCount = malaInput === '' ? 0 : Math.max(0, parseInt(malaInput, 10) || 0);
  const malaTotal = malaCount * MALA_SIZE;
  const hasMalaValue = malaInput !== '' && malaCount > 0;
  const naamJapProgress = useWatch({
    control,
    name: 'progressEntered',
  });
  const hasNaamJapValue = typeof naamJapProgress === 'number' && naamJapProgress > 0;

  function updateMalaInput(nextValue: number) {
    setMalaInput(String(Math.max(1, nextValue)));
  }

  function cacheFieldValues(data: NiyamFormInputs) {
    localStorage.setItem('fullName', data.fullName);
  }

  async function onConfirmSubmission() {
    const confirmedSubmission = submissionData;
    const confirmedMode = submissionMode;

    if (confirmedSubmission === null || confirmedMode === null) {
      return;
    }

    try {
      await execute(confirmedSubmission);
      const successMessage = `Added ${confirmedSubmission.progress.toLocaleString()} Naam Japs. Thank you for contributing to the sankalp.`;
      setFormFeedback({
        message: successMessage,
        status: 'success',
      });
      setSnackbarState({
        message: successMessage,
        open: true,
        status: SnackbarStatus.successful,
      });

      if (confirmedMode === 'naamJap') {
        resetField('progressEntered');
      } else {
        setMalaInput('');
      }
    } catch {
      const errorMessage = "We couldn't save your Naam Japs. Please try again. Your entered number is still here.";
      setFormFeedback({
        message: errorMessage,
        status: 'error',
      });
      setSnackbarState({
        message: errorMessage,
        open: true,
        status: SnackbarStatus.error,
      });
    } finally {
      setConfirmDialogOpen(false);
      setSubmissionData(null);
      setSubmissionMode(null);
    }
  }

  function onCancel() {
    setConfirmDialogOpen(false);
    setSubmissionData(null);
    setSubmissionMode(null);
  }

  function openConfirmation(data: NiyamFormInputs, progress: number, mode: EntryMode) {
    cacheFieldValues(data);
    setFormFeedback(null);

    const formSubmission: NiyamFormSubmission = {
      niyam: DEFAULT_NIYAM,
      progress,
      ageGroup: DEFAULT_AGE_GROUP,
      fullName: data.fullName,
      mandirName: DEFAULT_MANDIR_NAME,
    };
    setSubmissionData(formSubmission);
    setSubmissionMode(mode);
    setConfirmDialogOpen(true);
  }

  async function onSubmitNaamJapHandler(data: NiyamFormInputs) {
    openConfirmation(data, data.progressEntered, 'naamJap');
  }

  async function onSubmitMalaHandler(data: NiyamFormInputs) {
    if (!hasMalaValue) {
      return;
    }

    openConfirmation(data, malaTotal, 'mala');
  }

  return (
    <Box mt={{ xs: 3, sm: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
      <FormCard>
        <Box mb={2.5}>
          <Typography sx={{ color: '#9A3A10', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.12em' }}>
            SIMPLE DAILY ENTRY
          </Typography>
          <Typography sx={{ color: '#3B250C', fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.15, mt: 0.6 }}>
            Add your Naam Jap count
          </Typography>
          <Typography sx={{ color: '#765229', fontSize: '0.98rem', lineHeight: 1.5, mt: 0.8 }}>
            The sankalp is already selected for you. Choose whether you counted direct Naam Japs or full malas.
          </Typography>
        </Box>
        {formFeedback !== null ? (
          <Alert severity={formFeedback.status} sx={{ mb: 2.2 }}>
            {formFeedback.message}
          </Alert>
        ) : null}
        <form
          data-testid='add-niyam-progress-form'
          onSubmit={handleSubmit(entryMode === 'naamJap' ? onSubmitNaamJapHandler : onSubmitMalaHandler)}
        >
          <FormContainer container spacing={2.2} direction='column'>
            <GenericTextInput
              id='full-name-input'
              label='Full name'
              name='fullName'
              control={control}
              rules={{ required: 'Enter your full name' }}
            />
            <Grid item>
              <Tabs
                value={entryMode}
                onChange={(_, value: EntryMode) => {
                  setEntryMode(value);
                }}
                aria-label='Naam Jap entry type'
                sx={{
                  'minHeight': '44px',
                  'mb': 1.5,
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#AE3408',
                    height: '3px',
                    borderRadius: '999px',
                  },
                  '& .MuiTab-root': {
                    color: '#8A6A43',
                    fontWeight: 800,
                    minHeight: '44px',
                    textTransform: 'none',
                  },
                  '& .Mui-selected': {
                    color: '#7B2E0D !important',
                  },
                }}
              >
                <Tab label='Naam Jap' value='naamJap' id='naam-jap-tab' aria-controls='naam-jap-panel' />
                <Tab label='Malas' value='mala' id='mala-tab' aria-controls='mala-panel' />
              </Tabs>
              {entryMode === 'naamJap' ? (
                <EntryModePanel id='naam-jap-panel' role='tabpanel' aria-labelledby='naam-jap-tab'>
                  <Typography sx={{ color: '#7B2E0D', fontWeight: 800, fontSize: '1rem', mb: 0.5 }}>
                    Enter Naam Jap total
                  </Typography>
                  <Typography sx={{ color: '#775329', fontSize: '0.9rem', lineHeight: 1.45, mb: 1.6 }}>
                    Use this if you counted with a digital counter, tally, or already know your jap total.
                  </Typography>
                  <NiyamProgressInput
                    name='progressEntered'
                    control={control}
                    rules={{
                      min: 1,
                      required: 'Enter your Naam Jap total',
                    }}
                    selectedNiyam={DEFAULT_NIYAM}
                  />
                  <Grid container justifyContent='flex-end' mt={2}>
                    <SubmitNiyamProgressSubmitButton
                      ariaLabel='submit Naam Jap total'
                      disabled={!hasNaamJapValue}
                      label='Submit Naam Jap'
                      loading={status === 'loading'}
                    />
                  </Grid>
                </EntryModePanel>
              ) : (
                <EntryModePanel id='mala-panel' role='tabpanel' aria-labelledby='mala-tab'>
                  <Typography sx={{ color: '#7B2E0D', fontWeight: 800, fontSize: '1rem' }}>
                    Enter malas completed
                  </Typography>
                  <Typography sx={{ color: '#775329', fontSize: '0.9rem', lineHeight: 1.45, mt: 0.5, mb: 1.6 }}>
                    We will convert your malas into Naam Japs automatically. One mala is counted as 108 Naam Japs.
                  </Typography>
                  <Grid container spacing={1.4} alignItems='center'>
                    <Grid item xs={12} sm={5}>
                      <TextField
                        id='mala-count-input'
                        label='Number of malas'
                        type='number'
                        value={malaInput}
                        onChange={(event) => {
                          const value = event.target.value;
                          setMalaInput(value === '' ? '' : String(Math.max(0, parseInt(value, 10) || 0)));
                        }}
                        InputProps={{
                          inputProps: {
                            min: 0,
                          },
                          endAdornment: (
                            <InputAdornment position='end'>
                              <NumberStepperControls
                                decreaseLabel='Decrease mala count'
                                increaseLabel='Increase mala count'
                                onChange={updateMalaInput}
                                value={malaCount}
                              />
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{ shrink: true }}
                        placeholder='0'
                        sx={{
                          '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button':
                            {
                              WebkitAppearance: 'none',
                              margin: 0,
                            },
                          '& input[type=number]': {
                            MozAppearance: 'textfield',
                          },
                        }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography sx={{ color: '#3B250C', fontWeight: 800, fontSize: '1.1rem' }}>
                        {hasMalaValue ? `${malaTotal.toLocaleString()} japs` : '0 japs'}
                      </Typography>
                      <Typography sx={{ color: '#8A6A43', fontSize: '0.82rem' }}>
                        {hasMalaValue ? `${malaCount} x ${MALA_SIZE}` : `${MALA_SIZE} beads per mala`}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={3}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: { xs: 'stretch', sm: 'flex-end' },
                      }}
                    >
                      <SubmitNiyamProgressSubmitButton
                        ariaLabel='submit malas as Naam Jap total'
                        disabled={!hasMalaValue}
                        fullWidth
                        label='Submit malas'
                        loading={status === 'loading'}
                      />
                    </Grid>
                  </Grid>
                </EntryModePanel>
              )}
            </Grid>
          </FormContainer>
        </form>
      </FormCard>
      {confirmDialogOpen === true ? (
        <ConfirmSubmissionDialog
          open={confirmDialogOpen}
          handleCancel={onCancel}
          handleOk={onConfirmSubmission}
          formSubmission={submissionData!}
          formStatus={status}
        />
      ) : null}
    </Box>
  );
}

export default AddNiyamProgressForm;
