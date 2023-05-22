import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Niyam, niyams } from '../../../../../config/niyams';

interface NiyamSelectProps {
  value: Niyam | null;
  setValue: (value: Niyam | null) => void;
}

function NiyamSelect(props: NiyamSelectProps): JSX.Element {
  const { value, setValue } = props;

  function onNiyamSelected(event: SelectChangeEvent) {
    setValue(niyams.find((niyam) => niyam.id === event.target.value) ?? null);
  }

  return (
    <Grid item>
      <FormControl fullWidth required>
        <InputLabel id='select-niyam-label'>Niyam</InputLabel>
        <Select
          id='select-niyam'
          labelId='select-niyam-label'
          data-testid='niyam-select-field'
          label='Niyam'
          value={value?.id}
          onChange={onNiyamSelected}
          inputProps={{ 'aria-label': 'select niyam' }}
        >
          {niyams.map((niyam) => (
            <MenuItem key={niyam.id} value={niyam.id}>
              {niyam.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}

export default NiyamSelect;
