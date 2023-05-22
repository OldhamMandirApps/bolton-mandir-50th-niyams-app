import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { niyams } from '../../../../../config/niyams';
import { Controller, Control, RegisterOptions, FieldPath } from 'react-hook-form';
import { NiyamFormInputs } from '../../AddNiyamProgressForm';

interface NiyamSelectProps {
  name: FieldPath<NiyamFormInputs>;
  control: Control<NiyamFormInputs>;
  rules: Omit<
    RegisterOptions<NiyamFormInputs, FieldPath<NiyamFormInputs>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

function NiyamSelect(props: NiyamSelectProps): JSX.Element {
  return (
    <Grid item>
      <FormControl fullWidth required>
        <InputLabel id='select-niyam-label'>Niyam</InputLabel>
        <Controller
          name={props.name}
          control={props.control}
          rules={props.rules}
          render={({ field }) => (
            <Select
              id='select-niyam'
              labelId='select-niyam-label'
              data-testid='niyam-select-field'
              label='Niyam'
              inputProps={{ 'aria-label': 'select niyam' }}
              {...field}
            >
              {niyams.map((niyam) => (
                <MenuItem key={niyam.id} value={niyam.id}>
                  {niyam.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </Grid>
  );
}

export default NiyamSelect;
