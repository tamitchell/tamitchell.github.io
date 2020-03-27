import React from "react";
import { Container, Row, Col } from "reactstrap";

import { educationData } from "../data";

const Education = () => (
  <Container className="resume-object">
    <h2>Education</h2>
      {educationData.college.map((school, i) => {
        return (
          <Container fluid={true} className="education-object" key={i}>
            <Row>
              <Col className="img-container d-none d-lg-block d-print-none">
                <img src={school.logo} alt={school.logo + " Official Logo"} />
              </Col>
              <Col className="education-content">
                <h4>{school.schoolName}</h4>
                <span className="paragraphs-inline">
                  <h5 className="stylized-subtitle">{school.degree}</h5>
                  <p>{school.graduationDate} </p>
                </span>
                <p>{school.additionalNote}</p>
              </Col>
            </Row>
          </Container>
        );
      })}
  </Container>
);

export default Education;
