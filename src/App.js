import './App.css';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Container, Divider } from 'semantic-ui-react';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutPanel from './components/AboutPanel';
import ContactPanel from './components/ContactPanel';
import DesignPanel from './components/DesignPanel';
import MainPanel from './components/MainPanel';
import NavBar from './components/NavBar';
import SkillsPanel from './components/SkillsPanel';
import SoftwarePanel from './components/SoftwarePanel';
import Footer from './components/Footer';
import ProductionPanel from './components/ProductionPanel';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container>
          <MainPanel />
          <Divider hidden />
          <div id="about"><AboutPanel /></div>
          <Divider hidden />
          <div id="skills"><SkillsPanel /></div>
          <Divider hidden />
          <div id="software"><SoftwarePanel /></div>
          <Divider hidden />
          <div id="design"><DesignPanel /></div>
          <Divider hidden />
          <div id="production"><ProductionPanel /></div>
          <Divider hidden />
          <div id="contact"><ContactPanel /></div>
        </Container>
        <Footer />
      </Router>
    </div>
  );

}

export default App;
