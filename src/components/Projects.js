import React from "react";
import { Modal, Button, Row, Card, CardTitle } from "react-materialize";
import story from "../storyteller.png";

const Projects = () => (
  <Row>
    <h1>Projects</h1>
    <div className="project-container">
      <Modal
        fixedFooter
        header="Growthsphere"
        trigger={
          <Button className="project-button project1" waves="light">
            <p>Growthsphere</p>
          </Button>
        }
      >
        <Card
          header={<CardTitle image="https://media.giphy.com/media/2yyK43mkxnMSasviry/giphy.gif" />}
          actions={[
            <a href="https://growthsphere.herokuapp.com/">
              Deployed Application
            </a>,
            <a href="https://github.com/tamitchell/hair-journal">
              Github Repository
            </a>
          ]}
        >
          <p>
            <strong>Growthsphere</strong> is an online web application initially
            designed to create a space for African American women to track their
            Natural hair growth progress. What's more than a web application
            that logs hair regimens and product outcomes, I am hoping that this
            application can evolve to become a space where women of color can
            come to share, collaborate, and talk about their hair!
          </p>
          <br />

          <p>
            <strong>Technologies Used:</strong>
            <br />
            <br />
            NoSQL - MongoDB, Mongoose as ODM (Object Document Mapping),
            Express.js, Handlebars, Node.js, Passport (for user authentication)
          </p>
        </Card>
      </Modal>

      <Modal
        header="Happy Tail VA LLC"
        trigger={
          <Button className="project-button project2" waves="light">
            <p>Happy Tail VA LLC</p>
          </Button>
        }
      >
        <Card
          header={
            <CardTitle image="https://media.giphy.com/media/XoUUsG3Vgu3KgtYqRN/giphy.gif" />
          }
          actions={[
            <a href="http://happytail-dev.surge.sh/">Deployed Application</a>,
            <a href="https://github.com/tamitchell/HappyTailLLC">
              Github Repository
            </a>
          ]}
        >
          <strong>Happy Tails VA LLC</strong> is an upcoming dog walking company
          who wanted a launch site to expand to their growing clientel.
          <p>
            <strong>Position</strong>: Full Stack Web Developer
          </p>
          <p>
            <strong>Responsibilities:</strong>
            <ul>
              <li>
                Organized multiple visits with company owners to outline the
                design process.
              </li>
              <li>
                Made use of Google Analytics and Google Chrome Auditing service
                to ensure site has maximum SEO so that customers from all
                backgrounds are able to have access to the same service.
              </li>
              <li>
                Redesigned website with attractive color scheme and flexible
                layout optimal for mobile, tablet, and desktop view
              </li>
            </ul>
          </p>
          <p>
            <strong>Technologies Used</strong>
            <br />
            Javascript(ES5), HTML + SASS, Bootstrap, Surge (for deployment)
          </p>
        </Card>
      </Modal>

      <Modal
        header="Storyteller: A Web Appication for Short Stories"
        trigger={
          <Button className="project-button project3" waves="light">
            <p>Storyteller</p>
          </Button>
        }
      >
        <Card
          header={<CardTitle image={story} />}
          actions={[
            <a href="https://github.com/tamitchell/storyteller">
              Github Repository
            </a>
          ]}
        >
          <p>
            <strong>Storyteller: A Web Appication for Short Stories</strong>
            is a modern organizational web app that helps to organize and write
            novels, poetry, and prose. While this project originally
            incorporated MERN (MongoDB, Express, React, and Node), I am
            currently refactoring it to also incorporate GraphQL. Therefore, it
            has been taken down from production.
          </p>

          <p>
            <strong>Technologies Used</strong>
            <br />
            React.js, Express.js, Node.js, MVC, MongoDB/Mongoose, GraphQL
          </p>
        </Card>
      </Modal>

      <Modal
        header="First Call Weather App"
        trigger={
          <Button className="project-button project4" waves="light">
            <p>First Call Weather</p>
          </Button>
        }
      >
        <Card
          header={
            <CardTitle image="https://media.giphy.com/media/9M6RmfvTSk98V4IhqH/giphy.gif" />
          }
          actions={[
            <a href="https://growthsphere.herokuapp.com/">
              Deployed Application
            </a>,
            <a href="https://firstcall-weather.surge.sh/">Github Repository</a>
          ]}
        >
          <p>
            <strong>First Call - Weather App</strong> is A React Based
            Application that uses Dark Sky's web API to gather weather data and
            Geocodio's API to render weather conditions based on user's desired
            location.
          </p>

          <p>
            <strong>Technologies Used</strong>
            <br />
            Javascript(ES6), React, JSX, Babel, HTML + SASS, DarkSky API,
            GeoCodio API, Surge (for deployment)
          </p>
        </Card>
      </Modal>

      <Modal
        header="Online Web Application Game"
        trigger={
          <Button className="project-button project5" waves="light">
            <p>Browser Web Game</p>
          </Button>
        }
      >
        <Card
          header={
            <CardTitle image="https://media.giphy.com/media/9xcljsereXGXDrdWas/giphy.gif" />
          }
          actions={[
            <a href="https://tamitchell.github.io/simple-game/">
              Deployed Application
            </a>,
            <a href="https://github.com/tamitchell/simple-game">
              Github Repository
            </a>
          ]}
        >
          <p>
            <strong>This game</strong> is an interactive, role-playing game for
            created learning and development
          </p>

          <p>
            <strong>Technologies Used</strong>
            <br />
            HTML, Sass/CSS, Vanilla Javascript (ES6), GH pages (for deployment)
          </p>
        </Card>
      </Modal>
    </div>
  </Row>
);

export default Projects;
