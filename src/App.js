import React from 'react';
import Selectors from './features/selectors/Selectors';
import Display from './features/display/Display';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Just Breathe</h1>
        <Selectors />
        <Display />
      </header>
    </div>
  );
}

export default App;
