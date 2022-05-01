import React from 'react';
import {Box} from '@mui/material';
import '../App.css';

export default function Impressum() {
  return (
    <div className="App">
      <Box marginTop="70px">
        <h1>
          <big>Impressum</big>
        </h1>
        Verantwortlich: Christian Hesels <br /> <br />
        Adresse: <br />
        Neue Bahnhofstraße 4 <br />
        10245 Berlin <br />
        <br />
        E-Mail: info@totalthunfisch.de
        <br />
        Telefon: 01712038292 <br />
      </Box>
    </div>
  );
}
