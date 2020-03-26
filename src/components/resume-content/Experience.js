import React from "react";
import { Container, Row, Col } from "reactstrap";

import { experienceData } from "../data";

const ProfessionalExperience = () => (
  <Container className="resume-object">
    <h2>Professional Experience</h2>
    <section>
      {experienceData.map((job, i) => {
        return (
          <Container fluid={true} key={i} className="education-object">
            <Row>
              <Col className="img-container">
                <img src={job.logo} alt={job.jobName + " Official Logo"} />
              </Col>
              <Col className="education-content">
                <h4>{job.jobName}</h4>
                <span className="paragraphs-inline">
                  <h5 className="stylized-subtitle">{job.jobTitle}</h5>
                  <p>
                    {job.location} <br /> {job.dateStarted}{" "}
                    {job.dateEnded !== null
                      ? "to " + job.dateEnded
                      : "to Current"}
                  </p>
                </span>
                <ul>
                  {job.skillsUsed.map((skill, i) => {
                    return <li key={i}>{skill}</li>;
                  })}
                </ul>
              </Col>
            </Row>
          </Container>
        );
      })}
    </section>
  </Container>
);

export default ProfessionalExperience;
