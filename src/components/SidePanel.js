import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import Profile from './Profile';
import { Skills } from './Skills';

const SidePanel = () => (
  <Container fluid="true" className="inner-container">
    <Profile/>
    <Skills/>
  </Container>
);

export default SidePanel;
