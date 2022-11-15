import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

const getStyles = (day, selectedOptions) => (
   {
    fontWeight: selectedOptions.indexOf(day) === -1 ? '400' : 'bold',
   });

const MultiOptionSelection = ({title, options, style}) =>  {
  const [selectedOptions, setSelectedDays] = React.useState([]);

  const updateOptions = ({target: {value}}) => 
    setSelectedDays(
      typeof value === 'string' ? value.split(',') : value,
    );

  return (
    <div>
      <FormControl sx={{ m: 4, width: 200 }} style={style}>
        <InputLabel id="demo-multiple-chip-label">{title}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedOptions}
          onChange={updateOptions}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={selected => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map(value => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map(name => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, selectedOptions)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultiOptionSelection;