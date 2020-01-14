import React from 'react';

import constants from '../../config/constants';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { constants.TITLE }
      </header>
    </div>
  );
}

export default App;
