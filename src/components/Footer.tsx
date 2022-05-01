import React from 'react';
import {BottomNavigation, Link} from '@mui/material';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Box sx={{width: 500}}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <BottomNavigationAction
            label="Impressum"
            component={Link}
            href="/impressum"
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
