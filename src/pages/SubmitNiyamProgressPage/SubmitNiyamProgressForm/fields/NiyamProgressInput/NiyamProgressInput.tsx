import { Grid, TextField } from '@mui/material';
import { Controller, Control, RegisterOptions, FieldPath } from 'react-hook-form';
import { NiyamFormInputs } from '../../SubmitNiyamProgressForm';
import { Niyam } from '../../../../../config/niyams';

interface NiyamProgressInputProps {
  name: FieldPath<NiyamFormInputs>;
  control: Control<NiyamFormInputs>;
  rules: Omit<
    RegisterOptions<NiyamFormInputs, FieldPath<NiyamFormInputs>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  selectedNiyam: Niyam;
}

function NiyamProgressInput(props: NiyamProgressInputProps): JSX.Element {
  const { selectedNiyam } = props;
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
            label={
              selectedNiyam && selectedNiyam.timeBased === true
                ? 'Number of minutes spent on niyam'
                : 'Number completed'
            }
            helperText='Please only submit completed niyams and not your target'
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
            value={field.value ?? ''}
            onChange={(event) => {
              const progress = event.target.value === '' ? '' : parseInt(event.target.value);
              field.onChange(progress);
            }}
          />
        )}
      />
    </Grid>
  );
}

export default NiyamProgressInput;
