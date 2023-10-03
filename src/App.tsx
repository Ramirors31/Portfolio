import AuxFnsService from './services/auxFnsService';
import './App.css';
import { Header } from './components/header';
import { Landing } from './components/Landing/Landing';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Carreer } from './components/Carreer/Carreer';
import { Contact } from './components/Contact/Contact';
import { MyProyects } from './components/Proyects/MyProyects';

function App() {
  const auxService = new AuxFnsService();
  auxService.logeo();
  
  return (
    <div style={{"backgroundColor": "#0e0f11", "minHeight":"2000px"}} className="App">
      <Header />
      <Landing/>
      <AboutMe/>
      <Carreer/>
      <MyProyects/>
      <Contact/>
    </div>
  );
}

export default App;
