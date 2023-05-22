import React from 'react';
import { Grid, TextField } from '@mui/material';
import { Controller, Control, RegisterOptions, FieldPath } from 'react-hook-form';
import { NiyamFormInputs } from '../../AddNiyamProgressForm';

interface NiyamProgressInputProps {
  name: FieldPath<NiyamFormInputs>;
  control: Control<NiyamFormInputs>;
  rules: Omit<
    RegisterOptions<NiyamFormInputs, FieldPath<NiyamFormInputs>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

function NiyamProgressInput(props: NiyamProgressInputProps): JSX.Element {
  return (
    <Grid item>
      <Controller
        name={props.name}
        control={props.control}
        rules={props.rules}
        render={({ field }) => (
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
            {...field}
          />
        )}
      />
    </Grid>
  );
}

export default NiyamProgressInput;
