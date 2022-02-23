import './App.css';
import Hero from './componentes/Hero.js'
import Footer from './componentes/Footer.js'
import Info from './componentes/Info.js'
import Clients from './componentes/Clients.js'
import Projects from './componentes/Projects.js'

function App() {
  return (
    <div>
      <Hero/>
      <Info/>
      <Projects/>
      <Clients/>
      <Footer/>
    </div>
  );
}

export default App;
