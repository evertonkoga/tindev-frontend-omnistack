import React from 'react';
import './App.css';

import Routes from './routes';

function App() {
  require('dotenv').config();

  return (
    <Routes />
  );
}

export default App;
