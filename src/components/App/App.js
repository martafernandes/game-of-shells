import React from 'react';

import constants from '../../helpers/constants';
import GameBoard from '../GameBoard/GameBoard';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { constants.dictionary.TITLE }
      </header>
      <div>
        <GameBoard />
      </div>
    </div>
  );
}

export default App;
