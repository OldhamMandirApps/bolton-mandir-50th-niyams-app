import { Grid, TextField } from '@mui/material';
import { Control, Controller, FieldPath, RegisterOptions } from 'react-hook-form';
import { NiyamFormInputs } from '../../SubmitNiyamProgressForm';

interface FullNameInputProps {
  name: FieldPath<NiyamFormInputs>;
  control: Control<NiyamFormInputs>;
  rules: Omit<
    RegisterOptions<NiyamFormInputs, FieldPath<NiyamFormInputs>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

function FullNameInput(props: FullNameInputProps): JSX.Element {
  return (
    <Grid item>
      <Controller
        name={props.name}
        control={props.control}
        rules={props.rules}
        render={({ field }) => (
          <TextField
            id='name-input'
            data-testid='name-input-field'
            label='Your name'
            variant='outlined'
            required
            fullWidth
            {...field}
          />
        )}
      />
    </Grid>
  );
}

export default FullNameInput;
