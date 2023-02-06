import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function StudentStatus() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Hostel Stay Status</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="In Hostel" />
        <FormControlLabel value="male" control={<Radio />} label="Out of hostel" />
        <FormControlLabel value="other" control={<Radio />} label="Out of Station" />
      </RadioGroup>
    </FormControl>
  );
}