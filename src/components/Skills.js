import React from "react";
import { Container, Row } from "reactstrap";
import {
  frontEnd,
  backEnd,
  dataBases,
  design,
  methodologies,
  softSkills
} from "./data";
import CustomCollapsible from "./CustomCollapsible";

export const Skills = () => {
  return (
    <Container fluid={true} className="skills-content">
      <Row>
        <h2>Skills/Tools</h2>
      </Row>
      <div className="skill-list-container">
        <Row className="skill-list">
          <CustomCollapsible
            className="subtle-collapsible"
            title="Front End"
            content={frontEnd}
            id={1}
          />
        </Row>
        <Row className="skill-list">
          <CustomCollapsible
            className="subtle-collapsible"
            title="Back End"
            content={backEnd}
            id={2}
          />
        </Row>
        <Row className="skill-list">
        <CustomCollapsible
            className="subtle-collapsible"
            title="Databases"
            content={dataBases}
            id={3}
          />
        </Row>
        <Row className="skill-list">
        <CustomCollapsible
            className="subtle-collapsible"
            title="Methodologies"
            content={methodologies}
            id={4}
          />
        </Row>
        <Row className="skill-list">
        <CustomCollapsible
            className="subtle-collapsible"
            title="Design"
            content={design}
            id={5}
          />
        </Row>
        <Row className="skill-list">
        <CustomCollapsible
            className="subtle-collapsible"
            title="Soft Skills"
            content={softSkills}
            id={6}
          />
        </Row>
      </div>
    </Container>
  );
};
