import React from "react";
import { Container } from "reactstrap";
import ProfessionalSummary from "./Summary";
import Education from "./Education";
import ProfessionalExperience from "./Experience";
import Projects from "./Projects";

const BulkResumeData = () => {
  return (
    <Container className="inner-container">
      <Container></Container>
      <ProfessionalSummary />
      <Education />
      <ProfessionalExperience />
      <Projects />
    </Container>
  );
};

export default BulkResumeData;
