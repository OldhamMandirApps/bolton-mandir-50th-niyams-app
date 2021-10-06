import React from 'react';
import { TextField } from '@mui/material';

function NiyamProgressInput(): JSX.Element {
  return (
    <TextField
      id='niyam-progress-input'
      data-testid='niyam-progress-input-field'
      aria-label='niyam progress'
      label='Progress'
      variant='outlined'
    />
  );
}

export default NiyamProgressInput;
