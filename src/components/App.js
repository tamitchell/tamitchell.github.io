import React, { Component, Fragment } from 'react';
import { Route, Switch} from 'react-router-dom'
import '../components/sass/App.scss';
import Hero from './Hero'
import Resume from './Resume'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Nav from './Navigation'
import Footer from './Footer'

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
