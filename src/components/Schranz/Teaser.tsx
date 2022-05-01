import React, {useEffect, useState} from 'react';
import {Grid} from '@mui/material';
import GogFront from './images/gog_front.jpg';
import GogBack from './images/gog_back.jpg';
import '../../App.css';

export default function Teaser() {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setOpacity(position / 1000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1 style={{opacity: opacity}}>COMING SOON</h1>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        spacing={{xs: 1, md: 2}}
        columns={{xs: 2, sm: 2, md: 2}}
      >
        <Grid item key="image" className="frontImage">
          <img
            src={GogFront}
            className="frontImage"
            onMouseOver={e => (e.currentTarget.src = GogBack)}
            onMouseOut={e => (e.currentTarget.src = GogFront)}
            style={{opacity: opacity}}
          />
        </Grid>
        <Grid item key="text">
          <h2>
            Die <big>Debüt-EP</big>
          </h2>
          <p>"...oder gar nicht"</p> erscheint am<big> 03.06.2022 </big>
        </Grid>
      </Grid>
      <br /> <br />
      Die gesammelte Diskographie findest du überall, wo es Musik gibt
    </div>
  );
}
