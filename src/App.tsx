import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Landing } from './components/Landing/Landing';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Carreer } from './components/Carreer/Carreer';
function App() {
  return (
    <div style={{"backgroundColor": "#0e0f11", "minHeight":"800px"}} className="App">
      <Header />
      <Landing/>
      <AboutMe/>
      <Carreer/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
