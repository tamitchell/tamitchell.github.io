import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../sass/App.scss";
import { Container, Row, Col } from "reactstrap";
import SidePanel from "./SidePanel";
import BulkResumeData from './resume-content/BulkResumeData';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid={true} clasName="app-container">
          <Row className="resume-container">
          <Col lg={'auto'} className="side-panel">
          <SidePanel/>
          </Col>
          <Col className="resume-content">
            <BulkResumeData/>
          </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}
