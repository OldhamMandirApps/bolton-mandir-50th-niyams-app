import React from 'react';
import NiyamSelect from './fields/NiyamSelect';
import NiyamProgressInput from './fields/NiyamProgressInput';
import AddNiyamProgressSubmitButton from './fields/AddNiyamProgressSubmitButton';
import { Grid, styled } from '@mui/material';

const FormContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    maxWidth: '40vw',
  },
}));

function AddNiyamProgressForm(): JSX.Element {
  return (
    <div data-testid='add-niyam-progress-form'>
      <FormContainer container spacing={2} direction='column'>
        <NiyamSelect />
        <NiyamProgressInput />
        <AddNiyamProgressSubmitButton />
      </FormContainer>
    </div>
  );
}

export default AddNiyamProgressForm;
