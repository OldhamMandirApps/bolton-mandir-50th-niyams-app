import { Grid, TextField } from '@mui/material';
import { Control, Controller, FieldPath, RegisterOptions } from 'react-hook-form';
import { NiyamFormInputs } from '../../SubmitNiyamProgressForm';

interface GenericTextInputProps {
  id: string;
  dataTestId?: string;
  label: string;
  name: FieldPath<NiyamFormInputs>;
  control: Control<NiyamFormInputs>;
  rules: Omit<
    RegisterOptions<NiyamFormInputs, FieldPath<NiyamFormInputs>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

function GenericTextInput(props: GenericTextInputProps): JSX.Element {
  return (
    <Grid item>
      <Controller
        name={props.name}
        control={props.control}
        rules={props.rules}
        render={({ field }) => (
          <TextField
            id={props.id}
            data-testid={props.dataTestId}
            label={props.label}
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

export default GenericTextInput;
