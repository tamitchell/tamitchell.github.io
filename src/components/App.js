import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import '../sass/App.scss';
import SidePanel from './SidePanel';

export default class App extends Component {
  render() {
    return (
          <Router>
        <Fragment>

          <SidePanel/>
        </Fragment>
          </Router>
    );
  }
}
