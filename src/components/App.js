import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../sass/App.scss";
import { Container, Row, Col } from "reactstrap";
import SidePanel from "./SidePanel";
import BulkResumeData from './BulkResumeData';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Row>
          <Col className="side-panel">
          <SidePanel className="side-panel"/>
          </Col>
          <Col className="">
            <BulkResumeData/>
          </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}
