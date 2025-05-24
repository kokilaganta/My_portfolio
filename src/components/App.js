import React from 'react';
import Intro from './Intro';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import '../css/App.css'; // Make sure this includes general layout styling

class App extends React.Component {
  render() {
    return (
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
    );
  }
}

export default App;
