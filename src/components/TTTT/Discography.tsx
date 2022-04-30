import React from 'react';
import {useTTTTStore} from '../../Store';
import Grid from '@mui/material/Grid';

export default function Discography() {
  const {getAlbums, getSongs} = useTTTTStore();

  return (
    <div>
      <h1>Diskographie</h1>
      <big>Alben</big>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        spacing={{xs: 0, md: 1}}
        columns={{xs: 4, sm: 8, md: 12}}
      >
        {getAlbums().map(album => (
          <Grid item key={album.name}>
            <img src={require('./artworks/' + album.img)} />
          </Grid>
        ))}
      </Grid>
      <big>Singles</big>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        spacing={{xs: 0, md: 1}}
        columns={{xs: 4, sm: 8, md: 12}}
      >
        {getSongs().map(song => {
          return song.wasSingle ? (
            <Grid item key={song.name}>
              <img src={require('./artworks/' + song.img)} />
            </Grid>
          ) : (
            ''
          );
        })}
      </Grid>
      <p>Unsere Musik kannst du überall streamen wo es Musik gibt</p>
    </div>
  );
}
