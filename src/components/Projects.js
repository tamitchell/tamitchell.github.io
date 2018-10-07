import React from "react";
import { Modal, Button, Row, Card, CardTitle, Col } from "react-materialize";

const Projects = () => (
  <Row className="project-component">
      <Col s={12} m={12} l={12}>
        <h1>Projects</h1>
      </Col>

      <Col s={12} m={4} l={4}>
        <Modal
          key={1}
          fixedFooter
          header="Growthsphere"
          trigger={
            <Button className="project1">
              <p>Growth<br />sphere</p>
            </Button>
          }
        >
          <Card
            header={
              <CardTitle image="https://media.giphy.com/media/2yyK43mkxnMSasviry/giphy.gif" />
            }
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
              <strong>Growthsphere</strong> is an online web application
              initially designed to create a space for African American women to
              track their Natural hair growth progress. What's more than a web
              application that logs hair regimens and product outcomes, I am
              hoping that this application can evolve to become a space where
              women of color can come to share, collaborate, and talk about
              their hair!
            </p>
            <br />

            <p>
              <strong>Technologies Used:</strong>
              <br />
              <br />
              NoSQL - MongoDB, Mongoose as ODM (Object Document Mapping),
              Express.js, Handlebars, Node.js, Passport (for user
              authentication)
            </p>
          </Card>
        </Modal>

        <Modal
          key={2}
          header="Happy Tail VA LLC"
          trigger={
            <Button className="project2">
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
            <strong>Happy Tails VA LLC</strong> is an upcoming dog walking
            company who wanted a launch site to expand to their growing
            clientel.
            <p>
              <strong>Position</strong>: Full Stack Web Developer
            </p>
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
            <p>
              <strong>Technologies Used</strong>
              <br />
              Javascript(ES5), HTML + SASS, Bootstrap, Surge (for deployment)
            </p>
          </Card>
        </Modal>
      </Col>

      <Col s={12} m={4} l={4}>
        <Modal
          header="Storyteller: A Web Appication for Short Stories"
          trigger={
            <Button className="project3">
              <p>Storyteller</p>
            </Button>
          }
        >
          <Card
            header={<CardTitle image="https://media.giphy.com/media/1ULBos7obHSsfuUto2/giphy.gif" />}
            actions={[
              <a href="https://storyteller-ss.surge.sh/">
                Deployed Application
              </a>,
              <a href="https://github.com/tamitchell/storyteller">
                Github Repository
              </a>
            ]}
          >
            <p>
              <strong>Storyteller: A Web Appication for Short Stories</strong>
              is a modern organizational web app that helps to organize and
              write novels, poetry, and prose. While this project originally
              incorporated MERN (MongoDB, Express, React, and Node), I am
              currently refactoring it to also incorporate GraphQL. Therefore,
              it has been taken down from production.
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
            <Button className="project4">
              <p>First Call Weather</p>
            </Button>
          }
        >
          <Card
            header={
              <CardTitle image="https://media.giphy.com/media/9M6RmfvTSk98V4IhqH/giphy.gif" />
            }
            actions={[
              <a href="https://firstcall-weather.surge.sh/">
                Deployed Application
              </a>,
              <a href="https://github.com/tamitchell/weatherapp">
                Github Repository
              </a>
            ]}
          >
            <p>
              <strong>First Call - Weather App</strong> is A React Based
              Application that uses Dark Sky's web API to gather weather data
              and Geocodio's API to render weather conditions based on user's
              desired location.
            </p>

            <p>
              <strong>Technologies Used</strong>
              <br />
              Javascript(ES6), React, JSX, Babel, HTML + SASS, DarkSky API,
              GeoCodio API, Surge (for deployment)
            </p>
          </Card>
        </Modal>
      </Col>

      <Col s={12} m={4} l={4}>
        <Modal
          header="Online Web Application Game"
          trigger={
            <Button className="project5">
              <p>Browser Web Game</p>
            </Button>
          }
        >
          <Card
            header={
              <CardTitle image="https://media.giphy.com/media/9xcljsereXGXDrdWas/giphy.gif" />
            }
            actions={[
              <a href="https://simple-game.surge.sh/">
                Deployed Application
              </a>,
              <a href="https://github.com/tamitchell/simple-game">
                Github Repository
              </a>
            ]}
          >
            <p>
              <strong>This game</strong> is an interactive, role-playing game
              for created learning and development
            </p>

            <p>
              <strong>Technologies Used</strong>
              <br />
              HTML, Sass/CSS, Vanilla Javascript (ES6), GH pages (for
              deployment)
            </p>
          </Card>
        </Modal>

        <Modal
          header="Danger Zone - Endangered Animal Tracking App"
          trigger={
            <Button className="project-button project6">
              <p>Danger Zone</p>
            </Button>
          }
        >
          <Card
            header={<CardTitle image={require("../img/construction.jpg")} />}
          >
            <p>
              <strong>Danger Zone</strong> is a full-stack web application
              created by three budding developers (Stephanie Choi, Davaid
              Zafirovic, and Tasha Mitchell(Me!) that combines our love of
              animals with our desire to collaborate and learn React. DangerZone
              educates users about endangered species and allows logged-in users
              to add their favorite endangered animal to their own profile page.
              Members also have access to news articles specifically about
              endangered animals and how you can help keep our beloved animals
              alive.
            </p>
            <br />
            <br />
            For our app:
            <ol>
              <li>User can view all animals on the Homepage</li>
              <li>
                User can navigate to the News page to see all news articles
              </li>
              <li>
                User can Sign-Up to create an account
              </li>
                <li>User can Log-In to access the account</li>
                <li>
                  Once logged in, User can update their User page by choosing an
                  animal to add to his/her individual User Page
                </li>
            </ol>
            <p>
              <strong>Technologies Used</strong>
              <br />
              Mongoose/MongoDB, Express, React, Node.js, Materialize, CORS, API,
              JSON
            </p>
            <br />
            <p>
              Currently, this site is under construction, and cannot be seen
              deployed, but visitors can see github repository links for
              <a
                className="repo-link"
                href="https://github.com/DavidZafa/Project3DTSFrontEnd"
              >
                Front End
              </a>
              and
              <a
                className="repo-link"
                href="https://github.com/DavidZafa/Project3DTSBackEnd"
              >
                Back End
              </a>
            </p>
          </Card>
        </Modal>
      </Col>
  </Row>
);

export default Projects;
