import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function NiyamSelect(): JSX.Element {
  return (
    <FormControl fullWidth data-testid='niyam-select-field'>
      <InputLabel id='select-niyam-label'>Select Niyam</InputLabel>
      <Select labelId='select-niyam-label' id='select-niyam' label='Select Niyam'>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

export default NiyamSelect;
