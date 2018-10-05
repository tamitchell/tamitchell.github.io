import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "../components/sass/App.scss";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Employment from './Employment'
export default class App extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Hero />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return [<About />, <Skills />, <Employment />, <Projects />, <Contact />];
              }}
            />
          </Switch>
        </Fragment>
      </div>
    );
  }
}
