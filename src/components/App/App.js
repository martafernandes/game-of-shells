import React from 'react';

import constants from '../../config/constants';
import Button from '../Button/Button';
import Ball from '../Ball/Ball';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { constants.dictionary.TITLE }
      </header>
      <div>
        <Button label="cenas" onClick={() => console.log('cenas**')} />
        <Ball isDisplayed={true} />
      </div>
    </div>
  );
}

export default App;
