import React from "react";
import { Chip } from "react-materialize";

const Skills = () => (
  <div>
    <h1>Languages and Skills</h1>
    <section>
      <h5>Front End</h5>
      <span>
        <Chip>HTML</Chip>
        <Chip>CSS3</Chip>
        <Chip>Sass/Compass</Chip>
        <Chip>Javascript (ES6)</Chip>
        <Chip>jQuery</Chip>
        <Chip>Bootstrap</Chip>
        <Chip>Materialize</Chip>
        <Chip>Handlebars.js</Chip>
        <Chip>Babel</Chip>
        <Chip>Webpack</Chip>
      </span>
    </section>
    <section>
      <h5>Back End</h5>
      <span>
        <Chip>Node.js</Chip>
        <Chip>Python/Django</Chip>
        <Chip>Express.js</Chip>
        <Chip>JSON</Chip>
      </span>
    </section>
    <section>
      <h5>Databases</h5>
      <span>
        <Chip>Mongoose/MongoDB</Chip>
        <Chip>NoSQL</Chip>
        <Chip>PostgreSQL</Chip>
        <Chip>SQL</Chip>
        <Chip>GraphQL</Chip>
      </span>
    </section>
    <section>
      <h5>Methodologies</h5>
      <span>
        <Chip>
          Version Control
        </Chip>
        <Chip>Agile Development/SCRUM</Chip>
        <Chip>Wire-framing/User Stories</Chip>
        <Chip>OOP (Object-Oriented Programming)</Chip>
        <Chip>MVC Methodologies</Chip>
      </span>
    </section>
    <section>
      <h5>Miscellaneous</h5>
      <span>
        <Chip>
          AJAX
        </Chip>
        <Chip>Responsive Web Design</Chip>
        <Chip>Trilingual in Spanish, English, and Chinese</Chip>
        <Chip>Adobe CS Suite</Chip>
        <Chip>Graphic Design</Chip>
      </span>
    </section>
  </div>
);

export default Skills;
