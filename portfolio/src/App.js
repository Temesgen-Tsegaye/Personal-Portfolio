
import './App.css';
import Top from './components/Top';
import Skills from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';
import Tempo from './components/Tempo';
function App() {
  return (
    <div className="App">
     <Top/>
     <Skills/>
     <Project/>
     <Contact/>
     {/* <Tempo/> */}
    </div>
  );
}

export default App;
