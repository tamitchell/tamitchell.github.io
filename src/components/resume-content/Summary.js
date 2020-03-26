import React from "react";
import { Container } from "reactstrap";
import { summaryData } from "../data";

const ProfessionalSummary = () => (
  <Container>
    <h2>About Me</h2>
    <section>
      <p>{summaryData.paragraph1}</p>
      <p>{summaryData.paragraph2}</p>
    </section>
  </Container>
);

export default ProfessionalSummary;
