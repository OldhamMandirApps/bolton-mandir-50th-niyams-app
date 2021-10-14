import React, { useState } from 'react';
import { Box, Grid, styled } from '@mui/material';
import NiyamSelect from './fields/NiyamSelect';
import NiyamProgressInput from './fields/NiyamProgressInput';
import AddNiyamProgressSubmitButton from './fields/AddNiyamProgressSubmitButton';
import useUpdateNiyamProgress from '../../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress';
import { Niyam } from '../../../config/niyams';
import validate from './validate';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import snackbarAtom, { SnackbarStatus } from '../../ProgressTrackersPage/Snackbar/snackbarAtom';

const FormContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    maxWidth: '500px',
  },
}));

function AddNiyamProgressForm(): JSX.Element {
  const [selectedNiyam, setSelectedNiyam] = useState<Niyam | null>(null);
  const [niyamProgress, setNiyamProgress] = useState<number | null>(null);

  const { execute, status } = useUpdateNiyamProgress();
  const setSnackbarState = useSetRecoilState(snackbarAtom);

  const router = useHistory();

  async function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validate(selectedNiyam, niyamProgress)) {
      try {
        await execute(selectedNiyam as Niyam, niyamProgress as number);
        setSnackbarState({
          message: 'You have successfully registered your niyam progress!',
          open: true,
          status: SnackbarStatus.successful,
        });
        router.push('/');
      } catch {}
    }
  }

  return (
    <Box mt={3}>
      <form data-testid='add-niyam-progress-form' onSubmit={onSubmitHandler}>
        <FormContainer container spacing={2} direction='column'>
          <NiyamSelect value={selectedNiyam} setValue={setSelectedNiyam} />
          <NiyamProgressInput value={niyamProgress} setValue={setNiyamProgress} />
          <AddNiyamProgressSubmitButton loading={status === 'loading'} />
        </FormContainer>
      </form>
    </Box>
  );
}

export default AddNiyamProgressForm;
