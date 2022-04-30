import React from 'react';
import Preview from './Schranz/Preview';
import Box from '@mui/material/Box';
import '../App.css';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {makeStyles} from '@mui/styles';
import band from './Schranz/schranz.jpg';

export default function Schranz() {
  const imageUrl = band;
  const useStyles = makeStyles({
    b1: {
      backgroundColor: '#a4e7ff',
      textAlign: 'center',
      padding: 2,
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      color: 'white',
    },
    b2: {
      backgroundColor: '#a4e7ff',
      textAlign: 'center',
      padding: 2,
      backgroundRepeat: 'no-repeat',
      color: 'white',
    },
    b3: {
      backgroundColor: 'black',
      textAlign: 'center',
      padding: 2,
      backgroundRepeat: 'no-repeat',
      color: 'white',
    },
  });

  const classes = useStyles();
  return (
    <div className="App">
      <Box marginTop="70px" width="100%">
        <Stack spacing={2}>
          <Paper className={classes.b1}>
            <Preview />
          </Paper>
        </Stack>
      </Box>
    </div>
  );
}