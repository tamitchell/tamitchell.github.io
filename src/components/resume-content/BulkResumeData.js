import React from "react";
import {
  Container, Row
} from "reactstrap";
import ProfessionalSummary from "./Summary";
import Education from "./Education";
import ProfessionalExperience from './Experience';
import Projects from './Projects';
import resumePDF from '../../documents/resume_portfolio.pdf';

const BulkResumeData = () => {

  return (
    <Container className="inner-container">
     <Container>
     <Row className="call-to-action-row">
        <button className="confirmation-button">
          <a href={resumePDF} download>Download Resume</a></button>
      </Row>
       </Container>
      <ProfessionalSummary/>
      <Education/>
      <ProfessionalExperience/>
      <Projects />
    </Container>
  );
};

export default BulkResumeData;
