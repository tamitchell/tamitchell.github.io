import React, { Component, Fragment } from 'react';
import '../components/sass/App.scss';
import Hero from './Hero'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Skills from './Skills'

export default class App extends Component {
  render() {
    return (
        <div>
        <Fragment>
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
