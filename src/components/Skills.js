import React from "react";
import { Chip, Row, Col } from "react-materialize";

const Skills = () => (
  <Row className="container skills-container">
    <section className="wrapper">
      <h1>Skills</h1>
      <Row>
        <Col s={12} m={12} l={12}>
          <h5>Front End</h5>
        </Col>
        <Col s={12} m={12} l={12}>
          <Chip>HTML</Chip>
          <Chip>CSS3</Chip>
          <Chip>Sass/Compass</Chip>
          <Chip>React.js</Chip>
          <Chip>Javascript (ES6)</Chip>
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
          <Chip>JSON</Chip>
        </Col>
      </Row>

      <Row>
        <Col s={12} m={12}>
          <h5>Data Bases</h5>
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
        </Col>
      </Row>

      <Row>
        <Col s={12} m={12}>
          <h5>Miscellaneous</h5>
        </Col>
        <Col s={12} m={12}>
          <Chip>AJAX</Chip>
          <Chip>Responsive Web Design</Chip>
          <Chip>Trilingual in Spanish, English, and Chinese</Chip>
          <Chip>Adobe CS Suite</Chip>
          <Chip>Graphic Design</Chip>
        </Col>
      </Row>
    </section>
  </Row>
);

export default Skills;
