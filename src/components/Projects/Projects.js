import React from "react";
import "./Projects.css";

const Projects = () => (
  <div>
    <h1>Projects</h1>
    <div className="row project1">
      <div className="project-img" l={6} s={12} m={6}>
        <img
          src="https://media.giphy.com/media/2yyK43mkxnMSasviry/giphy.gif"
          alt="Growthsphere project"
        />
      </div>
      <div className="project-content">
        <h4>Project Purpose:</h4>

        <p>
          <strong>Growthsphere</strong> is an online web application initially
          designed to create a space for African American women to track their
          Natural hair growth progress. What's more than a web application that
          logs hair regimens and product outcomes, I am hoping that this
          application can evolve to become a space where women of color can come
          to share, collaborate, and talk about their hair!
        </p>

        <p>
        <strong>Technologies Used</strong>
          <br />
          NoSQL - MongoDB, Mongoose as ODM (Object Document Mapping),
          Express.js, Handlebars, Node.js, Passport (for user authentication)
        </p>

        <p>
          <strong>Deployed Application:</strong> https://growthsphere.herokuapp.com/
          <br />
          <strong>Github Repo:</strong> https://github.com/tamitchell/hair-journal
        </p>
      </div>
    </div>
    <div className="row project2">
      <div className="project-img">
        <img
          src="https://media.giphy.com/media/XoUUsG3Vgu3KgtYqRN/giphy.gif"
          alt="Happy Tails Project"
        />
      </div>
      <div className="project-content">
        <h4>What Is It?</h4>

        <p>
          <strong>Happy Tails VA LLC</strong> is an upcoming dog walking company
          who wanted a launch site to expand to their growing clientel.
          <br />
          <br />
          <strong>My Role</strong>: Full Stack Web Developer
          <br />
          <br />
          <strong>Responsibilities Included:</strong>
          <br />
          <br />
          Organized multiple visits with company owners to outline the design
          process. 
          <br />
          <br />
          Made use of Google Analytics and Google Chrome Auditing
          service to ensure site has maximum SEO so that customers from all
          backgrounds are able to have access to the same service.
          <br />
          <br />
          Redesigned website with attractive color scheme and flexible layout optimal for
          mobile, tablet, and desktop view Technologies used:
          <br />
          <br />
          <strong>Technologies Used</strong>
          <br />
          <br />
          NoSQL - MongoDB, Mongoose as ODM (Object Document Mapping),
          Express.js, Handlebars, Node.js, Passport (for user authentication)
          <br />
          <br />
          <strong>Deployed Application:</strong> https://growthsphere.herokuapp.com/
          <br />
          <strong>Github Repo:</strong> https://github.com/tamitchell/hair-journal
        </p>
      </div>
    </div>
    <div>
      <div className="row project3">
        <div className="project-img">
          <img
            src="https://media.giphy.com/media/9xcljsereXGXDrdWas/giphy.gif"
            alt="Growthsphere project"
          />
        </div>
        <div className="project-content">
          <h4>Project Purpose:</h4>

          <p>
            <strong>Growthsphere</strong> is an online web application initially
            designed to create a space for African American women to track their
            Natural hair growth progress. What's more than a web application
            that logs hair regimens and product outcomes, I am hoping that this
            application can evolve to become a space where women of color can
            come to share, collaborate, and talk about their hair!
          </p>

          <p>
          <strong>Technologies Used</strong>
            <br />
            NoSQL - MongoDB, Mongoose as ODM (Object Document Mapping),
            Express.js, Handlebars, Node.js, Passport (for user authentication)
          </p>

          <p>
            <strong>Deployed Application:</strong> https://growthsphere.herokuapp.com/
            <br />
            <strong>Github Repo:</strong> https://github.com/tamitchell/hair-journal
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
