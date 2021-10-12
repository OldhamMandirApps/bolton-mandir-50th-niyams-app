import React, { useMemo } from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Niyam } from '../../../../../config/niyams';

interface NiyamSelectProps {
  value: Niyam | null;
  setValue: (value: Niyam) => void;
}

function NiyamSelect(props: NiyamSelectProps): JSX.Element {
  const { value, setValue } = props;

  const niyams = useMemo(() => {
    return Object.values(Niyam);
  }, []);

  function onNiyamSelected(event: SelectChangeEvent) {
    setValue(event.target.value as Niyam);
  }

  return (
    <Grid item>
      <FormControl fullWidth data-testid='niyam-select-field'>
        <InputLabel id='select-niyam-label'>Niyam</InputLabel>
        <Select
          labelId='select-niyam-label'
          id='select-niyam'
          label='Niyam'
          value={value || ''}
          onChange={onNiyamSelected}
        >
          {niyams.map((niyam) => (
            <MenuItem key={niyam} value={niyam}>
              {niyam}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}

export default NiyamSelect;
