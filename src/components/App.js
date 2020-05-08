import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "../sass/App.scss";
import {
  Container, Row, Col, Navbar, Nav, NavbarToggler, Collapse, NavItem
} from "reactstrap";
import SidePanel from "./SidePanel/SidePanel";
import BulkResumeData from './resume-content/BulkResumeData';
import Footer from './Footer';

export default function App() {
  const [state, setState] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <Container fluid={true} className="app-container">
        <Navbar className="navigation fixed-top" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <button className="nav-button" onClick={() => setState(state => !state)}>
                  See {state ? "Portfolio" : "Resume"}
                </button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container fluid={true} className="side-panel-container item">
          <Row className="side-panel-row">
            <Col lg={'auto'} className="side-panel">
              <SidePanel viewState={state}/>
            </Col>
            </Row>
        </Container>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition
            key={state ? "See Portfolio" : "See Resume"}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <Container fluid={true} className="app-content item">
              {state ?
                <Row className="resume-container">
                  <Col className="resume-content">
                    <BulkResumeData />
                  </Col>
                </Row> :
                <Row className="portfolio-container">
                  <h1>Hi!</h1>
                  {/* <Col lg={'auto'} className="side-panel">
                    <SidePanel />
                  </Col>
                  <Col className="resume-content">
                    <BulkResumeData />
                  </Col> */}
                </Row>}
            </Container>
          </CSSTransition>
        </SwitchTransition>
        <Footer className="item" />
      </Container>
    </Router>
  );
}

