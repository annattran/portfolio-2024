import './App.css';
import Sidebar from './Sidebar';
import About from './About';
import Resume from './Resume';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <main>
        <About />
        <Resume />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
