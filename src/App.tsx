import AuxFnsService from './services/auxFnsService';
import './App.css';
import { Header } from './components/header';
import { Landing } from './components/Landing/Landing';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Carreer } from './components/Carreer/Carreer';
import { Contact } from './components/Contact/Contact';
import { MyProyects } from './components/Proyects/MyProyects';
import { useEffect, useState } from 'react';
function App() {  
  return (
    <div className="App">
      <div className="holeContent">
        <Header/>
        <Landing/>
        <AboutMe/>
        <Carreer/>
        <MyProyects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
