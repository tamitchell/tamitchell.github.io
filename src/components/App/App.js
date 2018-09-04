import React, { Component, Fragment } from 'react';
import { Route, Switch} from 'react-router-dom'
import './App.css';
import Hero from '../Hero/Hero'
import Resume from '../Resume/Resume'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Nav from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

export default class App extends Component {
  render() {
    return (
        <div>
        <Fragment>
          <Nav />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        {/* <Switch>
          <Route exact path='/projects' render={Projects}/>
          <Route exact path='/resume' render={Resume}/>
          <Route exact path='/about' render={About}/>
          <Route exact path='/contact' render={Contact}/>
        </Switch> */}
      </Fragment>
        </div>
    );
  }
}
