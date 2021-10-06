import React from 'react';
import { TextField } from '@mui/material';

function NiyamProgressInput(): JSX.Element {
  return (
    <TextField id='niyam-progress-input' data-testid='niyam-progress-input-field' label='Progress' variant='outlined' />
  );
}

export default NiyamProgressInput;
