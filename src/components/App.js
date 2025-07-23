import React from 'react';
import Intro from './Intro';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import '../css/App.css';

import { HashRouter as Router } from 'react-router-dom'; // ✅ Use HashRouter for GitHub Pages
// import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <section id="Intro">
            <Intro />
          </section>
          <section id="About">
            <About />
          </section>
          <hr />
          <section id="Projects">
            <Projects />
          </section>
          <section id="Skills">
            <Skills />
          </section>
          <section id="Experience">
            <Experience />
          </section>
          <section id="Contact">
            <Contact />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
