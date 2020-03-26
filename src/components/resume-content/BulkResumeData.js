import React, { useState } from "react";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import ProfessionalSummary from "./Summary";
import Education from "./Education";
import ProfessionalExperience from './Experience';
import Projects from './Projects';
const BulkResumeData = () => {
  return (
    <Container className="inner-container">
      <ProfessionalSummary/>
      <Education/>
      <ProfessionalExperience/>
      <Projects/>
    </Container>
  );
};

export default BulkResumeData;
