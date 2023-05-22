import React, { useState } from 'react';
import { Box, Grid, styled } from '@mui/material';
import NiyamSelect from './fields/NiyamSelect';
import NiyamProgressInput from './fields/NiyamProgressInput';
import AddNiyamProgressSubmitButton from './fields/AddNiyamProgressSubmitButton';
import useUpdateNiyamProgress from '../../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress';
import { Niyam } from '../../../config/niyams';
import validate from './validate';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import snackbarAtom, { SnackbarStatus } from '../../ProgressTrackersPage/Snackbar/snackbarAtom';
import AddNiyamProgressInfoPanel from './AddNiyamProgressInfoPanel';

const FormContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    maxWidth: '500px',
  },
}));

function AddNiyamProgressForm(): JSX.Element {
  const [selectedNiyam, setSelectedNiyam] = useState<Niyam | null>(null);
  const [niyamProgress, setNiyamProgress] = useState<number | null>(null);
  const [name] = useState<string | null>(null);

  const { execute, status } = useUpdateNiyamProgress();
  const setSnackbarState = useSetRecoilState(snackbarAtom);

  const navigate = useNavigate();

  async function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validate(selectedNiyam, name, niyamProgress)) {
      try {
        await execute(selectedNiyam as Niyam, name, niyamProgress as number);
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
  }

  return (
    <Box mt={3}>
      <form data-testid='add-niyam-progress-form' onSubmit={onSubmitHandler}>
        <FormContainer container spacing={2} direction='column'>
          <NiyamSelect value={selectedNiyam} setValue={setSelectedNiyam} />
          <AddNiyamProgressInfoPanel niyam={selectedNiyam} />
          <NiyamProgressInput value={niyamProgress} setValue={setNiyamProgress} />
          <AddNiyamProgressSubmitButton loading={status === 'loading'} />
        </FormContainer>
      </form>
    </Box>
  );
}

export default AddNiyamProgressForm;
