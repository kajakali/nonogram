import React from 'react';
import logo from './logo.svg';
import './App.css';
import PatternGrid from '../../components/PatternGrid/PatternGrid';

function App() {
  return (
    <div className="App">
    <header>
      <h1>colorful logic problems!</h1>
      <p>Hello. This is not a complete app, it's just a place for
      me to work on how to build a nonogram/griddler type puzzle in react
      Right now, you can select a color from one of the color choice squares
      and then any square you click will turn that color. I started this around June 15th, 2020.</p>
    </header>
{/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <PatternGrid />
    </div>
  );
}

export default App;
