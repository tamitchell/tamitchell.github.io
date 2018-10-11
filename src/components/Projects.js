import React from "react";
import {
  Modal,
  Button,
  Row,
  Card,
  CardTitle,
  Col,
  MediaBox
} from "react-materialize";

const Projects = () => (
  <Row className="project-component">
    <Col s={12} m={12} l={12}>
      <h1>Projects</h1>
      <h4>All designs were created by me unless otherwise noted.</h4>
    </Col>

    <Col s={12} m={4} l={4}>
      <Modal
        key={1}
        fixedFooter
        header="Growthsphere"
        trigger={
          <Button className="project1">
            <p>
              Growth
              <br />
              sphere
            </p>
          </Button>
        }
      >
        <Card
          key={1}
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
          <aritcle>
            <p>
              <strong>Growthsphere</strong> is a self-started online web
              application initially designed to create a space for African
              American women to track their Natural hair growth progress. What's
              more than a web application that logs hair regimens and product
              outcomes, I am hoping that this application can evolve to become a
              space where women of color can come to share, collaborate, and
              talk about their hair!
            </p>
            <h6>Why This Project Matters</h6>
            <p>
              According to an Essence Panel exploring the power of the Black
              dollar and the extra price POC women must pay to feel beautiful,
              Black women already commit a huge chunk of change to the beauty
              industry. As Stephanie D. Smith on WWD.com writes:
            </p>

            <blockquote cite="https://wwd.com/beauty-industry-news/color-cosmetics/essence-panel-explores-beauty-purchasing-2139829/">
              African-American women spend $7.5 billion annually on beauty
              products, but shell out 80 percent more money on cosmetics and
              twice as much on skin care products than the general market,
              according to the research. That difference comes as
              African-American women sample many more products to find the ones
              that are most effective on their skin. By Stephanie D. Smith on
              May 19, 2009 from WWD issue 05/19/2009. Read the rest{" "}
              <a href="https://wwd.com/beauty-industry-news/color-cosmetics/essence-panel-explores-beauty-purchasing-2139829/">
                here
              </a>
            </blockquote>

            <p>
              So what does this tell us about Black women and how they must
              navigate through the beauty industry? It says that not only does
              there seem to be a shortage of products aimed at women of color,
              but also that the products that do exist do not seem to possess a
              base formula that can work for everyone. Instead, Black women must
              incorporate a strategy of trial-and-error and making homemade
              concoctions until they find a product that works for them.
            </p>
            <h6>
              Enter the Youtube Product Review era of the post-Natural Hair Boom
            </h6>
            <img
              src="https://media.giphy.com/media/3o7WIFSA2SEOpmkbba/giphy.gif"
              alt="Famous Natural Hair Youtuber Fusion of Cultures"
            />
            <br />

            <br />

            <p>
              What the Product Review era of Youtube did for Black women was
              create an audience of followers who were specifically looking for
              a generalized rating of a specific product. As we mentioned
              earlier, because Black women mostly found their products through
              an array of trials-and-error, Youtube provided a platform where
              many buyers could simply see one person try a specified product
              and give their personal opinion on it, while the buyer decides for
              themselves whether the both product reviewer's characteristics as
              well as their opinion of the product would be close enough to
              actually make a purchase.
            </p>
            <br />
            <p>
              However, after Youtube's heavy introduction of adsense and
              companies now specifically targeting and paying Youtubers to
              market and advertise their products, this process has been
              somewhat muddied to give a predefined opinion of whether or not
              the product is actually effective for women of color. In this
              sense, what once was a space for people to provide honest and
              unbiased reviews of products or regimens that actually worked has
              now been clouded and mixed in with the overall interpretation of
              what is supposed to work and what looks the prettiest in contrast
              to the actual contents of the product.
            </p>
            <br />
            <p>
              With all that being said, I felt like there was a strong need for
              an application is this industry that sort of cut out the
              "middleman" or the advertiser of said products and let women
              communicate with each other more closely about their natural hair
              in a preserved space. Built to resemble a mobile app but meant to
              behave like a forum, I believe that Growthsphere achieves this
              effort by providing space where the exact information is needed to
              help Black Women learn to cater to, care for, and grow their
              natural hair.
            </p>
            <h6>Initial Design</h6>
            <figure>
              <MediaBox
                src={require("../img/mobile_mockup.png")}
                caption="Inital wireframe designed for mobile view"
                width="100%"
              />
              <figcaption>
                Mobile wireframes. Top row, left to right- Growthsphere home
                view with login, Growthsphere home view with create an account
                form, Growthsphere logged user profile page, Growthsphere empty
                regimens page, Growthsphere regimen page with three regimens,
                Bottom Row, left to right - Menu overlay, Regimen creation form,
                Completed regimen form view.
              </figcaption>
            </figure>
            <br />
            <h6>UX Challenges</h6>
            <p>
              Part of the biggest challenge for this project was customizing the
              site's scalability from mobile view to desktop view. Because focus
              group testing revealed that users would be more likely to use the
              app on their phone rather than on a desktop, the inital design was
              customized to be more simplistic and modern, but later found to be
              quit lacking in content when scaled back up to a desktop or tablet
              view.
            </p>
            <figure>
              <MediaBox
                src="https://media.giphy.com/media/rUKo3LsN87mSGteqpa/giphy.gif"
                caption="Design captured with too much white space"
              />
              <figcaption>
                Responsive design found to be lacking when scaled to desktop
                view
              </figcaption>
            </figure>
            <h6>UX Solution</h6>
            <p>
              One solution that will be incorporated in this project is to do
              more user testing to reveal how the user visits information as
              they traverse through the site. As one can see from the above
              design, most of the content is centered because this is what will
              ultimately help the user to scroll downward to reveal more
              content. However, this design scheme clashes with the user's
              innate nature to scan back and forth (i.e. left to right or vice
              versa) for information, more often than not in a Z-shape or
              F-shape pattern.
            </p>
            <br />
            <p>
              Henceforth, I believe a much more help design would be, for this
              page specifically, would be to place the user profile image and
              stats to the left side, while display their created regimens to
              right. While user testing and surveys still need to be conducted
              to determine what else the user may want to view on this page, the
              latter seems like it would provide a bit more meat to an otherwise
              very delicate wireframe.
            </p>

            <h6>Development Challenges</h6>
            <p>
              After learning React and revisiting this project, one the things I
              can't help but notice developmental-wise is that the site is
              either slow to load upon first entering and the fact that every
              page must be loaded. With the introduction of the React and
              SPAs(single-page-apps) as one may see in my other projects, the
              ability to switch pages or routes without loading seems like a
              prime feature that would help to improve usability and allow for
              easier scalablity when making changes to the infrastructure on the
              backend and visualizing said changes on the frontend.
            </p>
            <br />
            <p>
              However, this issue is primarily caused by my choice to deploy to
              Heroku, as well as the decision to use Handlebars for what I
              foresaw would be a simple project that would not need much
              customization in the long run.
            </p>
            <br />
            <p>A rookie mistake, I know</p>
            <br />
            <p>
              Deploying to Heroku is free, but comes with a few caveats.
              Firstly, depending on traffic, the heroku's server will put the
              site to sleep to preserve bandwidth, this is what's causing the
              inital 4 - 6 second loading time that has confused some user's
              upon first visit. With Handlebars, being that it has been called a
              'logicless templating language,' it became increasingly more
              evident that making changes on the frontend would result in more
              clammy code (at least I think so). While Handlebars makes pretty
              good use of their partials (a feature that works very similarly to
              more modern frontend framework's ideas of "components"), it's
              still pretty ugly.
              <br />
              My plan is to switched the views portion over to React or Vue, as
              well as reinitialize a design scheme for the home view and profile
              portion of the website.
            </p>
            <h6>Technologies Used:</h6>
            <p>
              NoSQL - MongoDB, Mongoose as ODM (Object Document Mapping),
              Express.js, Handlebars, Node.js, Passport (for user
              authentication)
            </p>
          </aritcle>
        </Card>
      </Modal>

      <Modal
        key={2}
        header="Four Seasons Landscaping Services"
        trigger={
          <Button className="project2">
            <p>Four Seasons Landscaping Services</p>
          </Button>
        }
      >
        <Card
          key={2}
          header={
            <CardTitle image="https://media.giphy.com/media/8YHmdkMCpnK3RzswGP/giphy.gif" />
          }
          actions={[
            <a href="https://fourseasons-landscaping.surge.sh/">
              Deployed Application
            </a>,
            <a href="https://github.com/tamitchell/landscaping">
              Github Repository
            </a>
          ]}
        >
          <article>
            <p>
              <strong>Four Seasons Landscaping</strong> is a template I built
              for a client. The client wanted a website that would change it's
              color scheme depending on the season. While there is no button to
              view these changes live, developers can take a look at the
              <a href="https://github.com/tamitchell/landscaping/blob/master/src/components/App.js">
                repository
              </a>
              to view the code of how this was implemented. It is currently
              under review.
            </p>
            <h6>Responsibilities</h6>
            <p>
              Communicated with the client to understand the requirement of the
              website, gained experience in project planning.
              <br />
              <br />
              Created Responsive Designs (Mobile/Tablet/Desktop) using HTML5 and
              CSS, Bootstrap(reactstrap).
              <br />
              <br />
              Responsible for <strong>Style, look and feel</strong> of the web
              page with SASS that extends CSS with dynamic behavior such as
              variable, mixing, operations and functions.
              <br />
              <br />
              Worked on Cross-Browser compatibility and fixed the bugs for
              several browsers.
              <br />
              <br />
              Used Media Queries for the design to be compatible in all devices.
              <br />
              <br />
              Worked on React JS Virtual Dom and React views, rendering using
              components which contains additional components called custom HTML
              tags.
              <br />
              <br />
              Implemented stable React components and stand-alone functions to
              be added to any future pages.
            </p>
            <br />
            <p>
              <strong>Technologies Used</strong>
              <br />
              Javascript(ES6), HTML5 + CSS, SASS, Bootstrap (ReactStrap), Surge
              (for deployment)
            </p>
          </article>
        </Card>
      </Modal>
    </Col>

    <Col s={12} m={4} l={4}>
      <Modal
        key={3}
        header="Storyteller: A Web Appication for Short Stories"
        trigger={
          <Button className="project3">
            <p>Storyteller</p>
          </Button>
        }
      >
        <Card
          key={3}
          header={
            <CardTitle image="https://media.giphy.com/media/MSCyhsZLrotSHaebJ6/giphy.gif" />
          }
          actions={[
            <a href="https://storyteller-ss.surge.sh/">Deployed Application</a>,
            <a href="https://github.com/tamitchell/storyteller">
              Github Repository
            </a>
          ]}
        >
          <article>
            <p>
              <strong>Storyteller: A Web Appication for Short Stories </strong>
              is a modern organizational web app that helps to organize and
              write novels, poetry, and prose.
            </p>
            <br />
            <p>
              There are several versions of this project that range from having
              a MERN stack, one with GraphQL (in order to provide a
              single-source-of-truth for the API) as well as firebase (which I
              wanted to try to test how it's authentication method works).
              Currently the site that is on display uses Firebase.
            </p>
            <br />
            <h6>Conception and Quick Introduction of the Problem</h6>
            <p>
              In the beginning, this application was heavily inspired by
              Novelize, a simplified novel-writing application that helps
              writers keep track of their writing flow, character progression,
              and manuscripts. I would say it is best known for it's wide-range
              customization features (i.e. the ability for the writer to add
              custom categories of what they would like to keep track of) as
              well as it's modern style and a rather simple interface that makes
              it easy to use and quick to learn.
            </p>
            <br />
            <img
              src="https://novelize.nyc3.digitaloceanspaces.com/articles/800/outline-mode.png"
              alt="Novelize screenshot of it's many features"
              title="Novelize screenshot"
            />
            <br />

            <p>
              That being said though, I, like many other writers are often
              overcome by the ability to customize and will spend so much time
              in the beginning designing characters, detailing backstories, and
              drawing out story maps that when presented with (even still) the
              white screen of emptiness and despair that we often immediately
              fall into sea of writer's block and go back to the safe harbor of
              detailing our would-be villans and superheros.
            </p>
            <br />

            <p>
              So I thought, how can I make this process easier for the writer?
              What tools can I provide that would perhaps kickstart this turn of
              events?
            </p>
            <h6>The Solution</h6>
            <p>
              Storyteller provides a temporarily solution to this by initially
              offering the writer a sort of free writing structure or template
              to kick off their overall writing process. It follows (for now at
              least) Dan Harmon's guide of "The Story Embryo" directly to the
              point of how most popular movies, TV shows, and novels follow a
              sort of 8-step plan to developing a character, breaking that
              characer down, and rebuilding him/her in a new or different
              situation than they were in after a series of (un)fortunate
              events.
            </p>

            <img
              src="https://notjustamoviepodcast.files.wordpress.com/2014/08/story-circle.png"
              alt="Artist depiction of the Story Embryo by Dan Harmon"
              title="The Story Embryo"
            />

            <p>
              While I still need to research on perhaps better or more thorough
              guides, this is ultimately the idea of a feature I thought would
              be a great asset to a site like Novelize that has really brimmed
              on their potential and still have so many possibilities left to
              conquer.
            </p>
            <h6>Features and User Stories</h6>
            <p>
              Currently such general features are thought to be of as such:
              <ul>
                <li>
                  All users (regardless of authenticated or not) should be able
                  to view all stories on the browsing page
                </li>
                <li>
                  All users should be able to log in or create an account, via
                  Google or through the site itself
                </li>
                <li>
                  Authenticated users should be able to view the stories that
                  they have written on a separate profile page with information
                  pertaining to only them
                </li>
                <li>
                  Authenticated users should be able to edit or delete only the
                  stories that they have created.
                </li>
                <li>
                  Authenticated users should have the ability to view other
                  user's profile pages, but should not be able to edit or delete
                  anything on said pages
                </li>
                <li>
                  All users should have the ability to view most recently
                  updated stories displayed on the browsing page.
                </li>
                <li>
                  All users should be able to rate or 'like' stories, but the
                  ability to downvote stories or 'dislike stories' should not be
                  a thing
                </li>
                <li>
                  All users should be able to search for stories based on genre,
                  rating, or language
                </li>
                <li>
                  Stories can either consist of chapters or stand-alone prose
                </li>
              </ul>
            </p>
            <h6>UX Challenges</h6>
            <p>
              Probably the biggest initial hurdle with the design of this was
              choosing a proper color scheme that would help encourage the
              writer to write. I had noticed that Novelize had choosen to go
              with a warm orange color that is often associated with
              friendliness and creativity, but for my choice I felt locked
              between the decision to use a blue-based color palatte vs a
              purple-based one.
            </p>
            <br />
            <figure>
              <img
                src={require("../img/storyteller_colorscheme.png")}
                alt="Rosy purplish color scheme"
              />
              <figcaption>First Choice and Currently Implemented</figcaption>
            </figure>
            <h6>UX Solutions</h6>
            <p>
              The reason for this challenge is less about what is most
              aesthetically pleasing and moreso about choosing colors that would
              fit the proper atmosphere for whatever time of day the author
              wishes to write. While doing a bit of research and asking around,
              it was revealed that most writers (although the time at which they
              choose to write varies) openly admit that the time at which they
              feel most creative is during the early evening up until they are
              about to fall asleep. In this sense, I decided that working with a
              brighter color like orange or light blue would be less ideal,
              because those colors seem to be used more often than not to
              control attention and to stimulate. Therefore, I decided to go
              with a more rosy gold, purplish color scheme because I thought the
              mood it encourages would be able to flux between both day and
              night without incurring eye fatigue or boredom.
            </p>
            <h6>Developer Challenges</h6>
            <p>
              The core of my challenges code-wise lie in the initial way I've
              drawn up the database infrastructure as well as my unfamiliarity
              with Firebase and using online cloud storage as a database. My
              current issue is that because I am unfamiliar with how to retrieve
              nested data from the Firebase, the possibility the following tree
              structure:
              <br />
              <br />
              <code>user --> user's stories --> stories' chapters</code>
              <br />
              <br />

              has become sort of a hassle to implement because I have yet to
              find sufficient documentation on how to setup proper models with
              firebase. From my experience however, it seems that Firebase has a
              pretty flexbile infrastructure in that it merely adds on the
              differences in structure when a user or admin updates a document,
              and it is only when trying to pull this information back out on
              the front end (say, if one document has a "names" property and
              another doesn't within the same collection ) that you will then
              begin to run into problems.

            </p>
            <h6>Developer Solutions</h6>
            <p>Although is listed a somewhat cumbersome issue, really the only issue that's stopping me from progressing is lack of time</p>
            <p>
              <h6>Technologies Used</h6>
              <br />
              React.js, Express.js, Node.js, MVC, MongoDB/Mongoose, GraphQL,
              Firebase
            </p>
          </article>
        </Card>
      </Modal>

      <Modal
        key={4}
        header="First Call Weather App"
        trigger={
          <Button className="project4">
            <p>First Call Weather</p>
          </Button>
        }
      >
        <Card
          key={4}
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
          <article>
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
          </article>
        </Card>
      </Modal>
    </Col>

    <Col s={12} m={4} l={4}>
      <Modal
        key={5}
        header="Online Web Application Game"
        trigger={
          <Button className="project5">
            <p>Browser Web Game</p>
          </Button>
        }
      >
        <Card
          key={5}
          header={
            <CardTitle image="https://media.giphy.com/media/9xcljsereXGXDrdWas/giphy.gif" />
          }
          actions={[
            <a href="https://simple-game.surge.sh/">Deployed Application</a>,
            <a href="https://github.com/tamitchell/simple-game">
              Github Repository
            </a>
          ]}
        >
          <article>
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
          </article>
        </Card>
      </Modal>

      <Modal
        key={6}
        header="Danger Zone - Endangered Animal Tracking App"
        trigger={
          <Button className="project-button project6">
            <p>Danger Zone</p>
          </Button>
        }
      >
        <Card
          key={6}
          header={<CardTitle image={require("../img/construction.jpg")} />}
        >
          <article>
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
              <li>User can Sign-Up to create an account</li>
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
          </article>
        </Card>
      </Modal>
    </Col>
  </Row>
);

export default Projects;
