import React from 'react';
import {useTTTTStore} from '../../Store';
import Grid from '@mui/material/Grid';
import '../../App.css';

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
            <div className="container">
              <img
                src={require('./artworks/' + album.img + '.jpg')}
                className="image"
              />
              <div className="middle">
                <div className="text">{album.name}</div>
              </div>
              {album.youtube && (
                <a href={album.youtube} target="_blank">
                  <span
                    className="iconify"
                    data-icon="akar-icons:youtube-fill"
                    style={{
                      color: '#FF0000',
                    }}
                  />
                </a>
              )}
              {album.spotify && (
                <a href={album.spotify} target="_blank">
                  <span
                    className="iconify"
                    data-icon="mdi:spotify"
                    style={{
                      color: '#1DB954',
                    }}
                  />
                </a>
              )}
              {album.apple && (
                <a href={album.apple} target="_blank">
                  <span
                    className="iconify"
                    data-icon="cib:apple-music"
                    style={{
                      color: '#f94c57',
                    }}
                  />
                </a>
              )}
            </div>
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
              <div className="container">
                <img
                  src={require('./artworks/' + song.img + '.jpg')}
                  className="image"
                />
                <div className="middle">
                  <div className="text">{song.name}</div>
                </div>
                {song.youtube && (
                  <a href={song.youtube} target="_blank">
                    <span
                      className="iconify"
                      data-icon="akar-icons:youtube-fill"
                      style={{
                        color: '#FF0000',
                      }}
                    />
                  </a>
                )}
                {song.spotify && (
                  <a href={song.spotify} target="_blank">
                    <span
                      className="iconify"
                      data-icon="mdi:spotify"
                      style={{
                        color: '#1DB954',
                      }}
                    />
                  </a>
                )}
                <a href={song.apple} target="_blank">
                  <span
                    className="iconify"
                    data-icon="cib:apple-music"
                    style={{
                      color: '#f94c57',
                    }}
                  />
                </a>
              </div>
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
