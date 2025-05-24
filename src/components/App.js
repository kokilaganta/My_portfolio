import React from 'react';
import '../css/App.css';
import Intro from './Intro';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);


import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename="/my-new-portfolio">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedpart: 1
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Intro />
          <div id="About">
            <About />
          </div>
          <hr />
          <div id="Projects">
            <Projects />
          </div>
          <div id="Skills">
            <Skills />
          </div>
          <div id="Experience">
            <Experience />
          </div>
          <div id="Contact">
            <Contact />
          </div>
        </div >
      </BrowserRouter>
    );
  }
}
export default App;
