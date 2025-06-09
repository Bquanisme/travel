import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([1000, 5000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: 200,
        p: 2,
        borderRadius: 2,
      }}
    >
      <Slider
        min={1000}
        max={5000}
        step={100}
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on" // hien nhan
        getAriaValueText={valuetext}
        sx={{
          color: '#000', // màu đen cho thanh trượt
          '& .MuiSlider-valueLabel': {
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '50%',
            width: 40,
            height: 40,
          },
        }}
      />
    </Box>
  );
}
