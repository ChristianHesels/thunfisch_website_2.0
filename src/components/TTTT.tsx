import React from 'react';
import Preview from './TTTT/Preview';
import Box from '@mui/material/Box';
import '../App.css';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {makeStyles} from '@mui/styles';
import band from './TTTT/band.jpg';
import bandsmall from './TTTT/bandsmall.jpg';
import YouTube from './TTTT/YouTube';
import useWindowSize from './Hooks/WindowsSize';

export default function TTTT() {
  const size = useWindowSize();
  let imageUrl = band;
  if (size.width) {
    imageUrl = size.width >= 650 ? band : bandsmall;
  }
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
  });

  const classes = useStyles();
  return (
    <div className="App">
      <Box marginTop="70px" width="100%">
        <Stack spacing={2}>
          <Paper className={classes.b1}>
            <Preview />
          </Paper>
          <Paper className={classes.b2}>
            <YouTube />
          </Paper>
        </Stack>
      </Box>
    </div>
  );
}
