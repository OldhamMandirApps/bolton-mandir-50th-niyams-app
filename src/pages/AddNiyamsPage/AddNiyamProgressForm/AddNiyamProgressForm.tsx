import React, { useState } from 'react';
import { Grid, styled } from '@mui/material';
import NiyamSelect from './fields/NiyamSelect';
import NiyamProgressInput from './fields/NiyamProgressInput';
import AddNiyamProgressSubmitButton from './fields/AddNiyamProgressSubmitButton';
import useUpdateNiyamProgress from '../../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress';
import { Niyam } from '../../../config/niyams';
import validate from './validate';

const FormContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    maxWidth: '40vw',
  },
}));

function AddNiyamProgressForm(): JSX.Element {
  const [selectedNiyam, setSelectedNiyam] = useState<Niyam | null>(null);
  const [niyamProgress, setNiyamProgress] = useState<number | null>(null);

  const { execute, status } = useUpdateNiyamProgress();

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validate(selectedNiyam, niyamProgress)) {
      execute(selectedNiyam as Niyam, niyamProgress as number);
    }
  }

  return (
    <form data-testid='add-niyam-progress-form' onSubmit={onSubmitHandler}>
      <FormContainer container spacing={2} direction='column'>
        <NiyamSelect value={selectedNiyam} setValue={setSelectedNiyam} />
        <NiyamProgressInput value={niyamProgress} setValue={setNiyamProgress} />
        <AddNiyamProgressSubmitButton loading={status === 'loading'} />
      </FormContainer>
    </form>
  );
}

export default AddNiyamProgressForm;
