import React, { useMemo } from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { Niyam } from '../../../../../config/niyams';

function NiyamSelect(): JSX.Element {
  const niyams = useMemo(() => {
    return Object.values(Niyam);
  }, []);

  return (
    <Grid item>
      <FormControl fullWidth data-testid='niyam-select-field'>
        <InputLabel id='select-niyam-label'>Niyam</InputLabel>
        <Select labelId='select-niyam-label' id='select-niyam' label='Niyam'>
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
