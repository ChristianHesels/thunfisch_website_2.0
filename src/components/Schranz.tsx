import React from 'react';
import Preview from './Schranz/Preview';
import Teaser from './Schranz/Teaser';
import Discography from './Global/Discography';
import Box from '@mui/material/Box';
import '../App.css';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {makeStyles} from '@mui/styles';
import {useSchranzStore} from '../Store';
import ich from './Schranz/ich.jpg';
import ich_mobile from './Schranz/ich_mobile.jpg';
import useWindowSize from './Hooks/WindowsSize';
import SocialFollow from './Global/SocialMedia';

export default function Schranz() {
  const size = useWindowSize();
  const {social, songs, albums} = useSchranzStore();
  const text = 'Meine gesamte Musik findest du überall, wo es Musik gibt';
  let imageUrl = '';
  if (size.width) {
    imageUrl = size.width >= 650 ? ich : ich_mobile;
  }
  const useStyles = makeStyles({
    b1: {
      backgroundColor: '#ffffff',
      textAlign: 'center',
      padding: 2,
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      color: 'white',
    },
    b2: {
      backgroundColor: '#262524',
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
        <SocialFollow social={social} />
        <Stack spacing={2}>
          <Paper className={classes.b1}>
            <Preview />
          </Paper>
          <Paper className={classes.b2}>
            <Teaser />
          </Paper>
          <Paper className={classes.b3}>
            <Discography songs={songs} albums={albums} text={text} />
          </Paper>
        </Stack>
      </Box>
    </div>
  );
}
