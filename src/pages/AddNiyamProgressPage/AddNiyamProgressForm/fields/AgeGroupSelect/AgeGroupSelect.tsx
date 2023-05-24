import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller, Control, RegisterOptions, FieldPath } from 'react-hook-form';
import { NiyamFormInputs } from '../../AddNiyamProgressForm';

interface AgeGroupSelectProps {
  name: FieldPath<NiyamFormInputs>;
  control: Control<NiyamFormInputs>;
  rules: Omit<
    RegisterOptions<NiyamFormInputs, FieldPath<NiyamFormInputs>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

const ageGroups = ['0 - 10', '11 - 20', '21 - 30', '31 - 40', '41 - 50', '50+'] as const;
export type AgeGroupOptions = (typeof ageGroups)[number];

function AgeGroupSelect(props: AgeGroupSelectProps): JSX.Element {
  return (
    <Grid item>
      <FormControl fullWidth required>
        <InputLabel id='select-age-group-label'>Age group</InputLabel>
        <Controller
          name={props.name}
          control={props.control}
          rules={props.rules}
          render={({ field }) => (
            <Select
              id='select-age-group'
              labelId='select-age-group-label'
              data-testid='age-group-select-field'
              label='Age group'
              inputProps={{ 'aria-label': 'select age group' }}
              {...field}
            >
              {ageGroups.map((ageGroup) => (
                <MenuItem key={ageGroup} value={ageGroup}>
                  {ageGroup}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </Grid>
  );
}

export default AgeGroupSelect;
