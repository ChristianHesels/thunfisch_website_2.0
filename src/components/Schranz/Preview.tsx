import React from 'react';
import '../../App.css';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Preview() {
  return (
    <div>
      <Typography variant="h1">
        <Paper
          style={{backgroundColor: 'rgba(100, 100, 100, .70)', color: 'white'}}
        >
          SCHRANZ ODER GAR NICHT
        </Paper>
        <div className="soon">Coming soon..</div>
      </Typography>
    </div>
  );
}
