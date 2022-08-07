import React from 'react';

import { dictionary} from '../../helpers/constants';
import GameBoard from '../GameBoard/GameBoard';
import type * as CSS from 'csstype';

const appCss: CSS.Properties = {
  textAlign: 'center',
  backgroundColor: '#282c34',
  minHeight: '100vh',
  alignItems: 'center',
  fontSize: '2rem',
  color: 'white',
};

const headerCSS: CSS.Properties = {
  padding: '2rem',
};

function App() {
  return (
    <div style={appCss}>
      <header style={headerCSS}>
        { dictionary.TITLE }
      </header>
      <GameBoard />
    </div>
  );
}

export default App;
