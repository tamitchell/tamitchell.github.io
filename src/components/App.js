import React, { Component, Fragment } from 'react';
import '../components/sass/App.scss';
import Hero from './Hero'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
// import Nav from './Navigation'
// import Footer from './Footer'
import Skills from './Skills'

export default class App extends Component {
  render() {
    return (
        <div>
        <Fragment>
          {/* <Nav /> */}
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
      </Fragment>
        </div>
    );
  }
}