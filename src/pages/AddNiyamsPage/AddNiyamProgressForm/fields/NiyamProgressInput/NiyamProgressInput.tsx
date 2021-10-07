import React from 'react';
import { Grid, TextField } from '@mui/material';

function NiyamProgressInput(): JSX.Element {
  return (
    <Grid item>
      <TextField
        id='niyam-progress-input'
        data-testid='niyam-progress-input-field'
        aria-label='niyam progress'
        label='Progress'
        variant='outlined'
        type='number'
        InputProps={{
          inputProps: {
            min: 1,
          },
        }}
      />
    </Grid>
  );
}

export default NiyamProgressInput;
