import { Grid, TextField } from '@mui/material';
import React from 'react';

interface NameInputProps {
  value: string | null;
  setValue: (name: string) => void;
}

function NameInput(props: NameInputProps): JSX.Element {
  return (
    <Grid item>
      <TextField
        id='name-input'
        data-testid='name-input-field'
        label='Your name'
        variant='outlined'
        required
        fullWidth
        value={props.value ?? ''}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </Grid>
  );
}

export default NameInput;
