import React from 'react';
import { Grid, TextField } from '@mui/material';

interface NiyamProgressInputProps {
  value: number | null;
  setValue: (value: number | null) => void;
}

function NiyamProgressInput(props: NiyamProgressInputProps): JSX.Element {
  const { value, setValue } = props;

  function onNiyamProgressChanged(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value === '' ? null : Number(event.target.value);
    setValue(newValue);
  }

  return (
    <Grid item>
      <TextField
        id='niyam-progress-input'
        data-testid='niyam-progress-input-field'
        label='Niyam Count'
        variant='outlined'
        type='number'
        required
        InputProps={{
          inputProps: {
            min: 1,
          },
        }}
        fullWidth
        value={value !== null ? value : ''}
        onChange={onNiyamProgressChanged}
      />
    </Grid>
  );
}

export default NiyamProgressInput;
