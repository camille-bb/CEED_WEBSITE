import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function MemberSlide({member}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 10, width: 130, position: 'relative', zIndex: 1 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
      <Box component="section" sx={{ height: 100, width: 100, p: 2, border: '1px', bgcolor: 'black' }}>
        <Box sx={{ color: 'white' }}>Sessions</Box>
      </Box>
      </Slide>
    </Box>
  );
}
