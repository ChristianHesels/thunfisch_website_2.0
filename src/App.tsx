import React from 'react';
import TTTT from './components/TTTT';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<div>test</div>} />
          <Route path="/tttt" element={<TTTT />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
