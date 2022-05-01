import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <div>
      <Box sx={{width: 500}}>
        <RouterLink to="/impressum">Impressum </RouterLink>
      </Box>
    </div>
  );
}
