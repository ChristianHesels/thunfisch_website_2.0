import React from 'react';
import TTTT from './components/TTTT';
import Schranz from './components/Schranz';
import Footer from './components/Footer';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Impressum from './components/Impressum';

function App() {
  const theme = createTheme();
  theme.typography.h1 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  };

  return (
    <div>
      <div className="App">
        <Router>
          <ThemeProvider theme={theme}>
            <ResponsiveAppBar />
            <Routes>
              <Route path="/" element={<TTTT />} />
              <Route path="/tttt" element={<TTTT />} />
              <Route path="/schranz" element={<Schranz />} />
              <Route path="/impressum" element={<Impressum />} />
            </Routes>
          </ThemeProvider>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
