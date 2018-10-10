import React from "react";
import { Chip, Row, Col } from "react-materialize";

const Skills = () => (
  <Row className="skills-container">
    <section className="wrapper">
      <h1>Skills</h1>
      <Row>
        <Col s={12} m={12} l={12}>
          <h5>Front End</h5>
        </Col>
        <Col s={12} m={12} l={12}>
          <Chip>HTML5 + CSS</Chip>
          <Chip>Sass</Chip>
          <Chip>React.js</Chip>
          <Chip>JavaScript (ES6)</Chip>
          <Chip>jQuery</Chip>
          <Chip>Bootstrap</Chip>
          <Chip>Materialize</Chip>
          <Chip>Handlebars.js</Chip>
          <Chip>Babel</Chip>
          <Chip>Webpack</Chip>
        </Col>
      </Row>

      <Row>
        <Col s={12} m={12} l={12}>
          <h5>Back End</h5>
        </Col>
        <Col s={12} m={12} l={12}>
          <Chip>Node.js</Chip>
          <Chip>Python/Django</Chip>
          <Chip>Express.js</Chip>
        </Col>
      </Row>

      <Row>
        <Col s={12} m={12}>
          <h5>DataBases</h5>
        </Col>
        <Col s={12} m={12}>
          <Chip>Mongoose/MongoDB</Chip>
          <Chip>NoSQL</Chip>
          <Chip>PostgreSQL</Chip>
          <Chip>SQL</Chip>
          <Chip>GraphQL</Chip>
        </Col>
      </Row>

      <Row>
        <Col s={12} m={12}>
          <h5>Methodologies</h5>
        </Col>
        <Col s={12} m={12}>
          <Chip>Version Control</Chip>
          <Chip>Agile Development/SCRUM</Chip>
          <Chip>Wire-framing/User Stories</Chip>
          <Chip>OOP (Object-Oriented Programming)</Chip>
          <Chip>MVC Methodologies</Chip>
          <Chip>RESTful API</Chip>
        </Col>
      </Row>

      <Row>
        <Col s={12} m={12}>
          <h5>Miscellaneous</h5>
        </Col>
        <Col s={12} m={12}>
          <Chip>Responsive Web Design</Chip>
          <Chip>Trilingual in Spanish, English, and Chinese</Chip>
          <Chip>Graphic Design</Chip>
          <Chip>Adobe Creative Suite: Photoshop, Adobe XD, Illustrator</Chip>
          <Chip>Project management / bug tracking: JIRA</Chip>
        </Col>
      </Row>
    </section>
  </Row>
);

export default Skills;
