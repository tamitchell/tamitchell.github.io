import React from "react";
import { Row, Col } from "react-materialize";

const Employment = () => (
  <Row className="employment-component">
    <h1>Employment</h1>
    <Row>
      <Col s={12} m={4} l={4}>
        <a href="http://www.metistream.com/">
          <img
            src={require("../img/metistream_logo.png")}
            alt="MetiStream Logo"
            title="MetiStream"
          />
        </a>
      </Col>
      <Col s={12} m={8} l={8}>
        <h5>MetiStream</h5>
        <h6>
          Graphic Designer
          <br />
          November 2018
        </h6>

        <p>
          MetiStream is a healthcare analytics platform and solutions provider.
          We deliver innovation at the intersection of big data, artificial
          intelligence and healthcare analytics.
          <br />
          <br />
          My role as a part-time Graphic
          Designer for MetiStream was to help improve preexisting marketing and pitch deck
          material and redesign them in a modern and minimalistic way. To
          achieve this, I got to work hands on with the CEO and COO of the
          company to ensure graphic accuracy and high quality consistency were
          maintain over the tranformation of the marketing deck by creating
          graphics, icons, slide templates and other PPT materials.
        </p>
        <p>
          Technologies Used: Adobe Illustrator, Photoshop, Autodesk Sketchbook
          Pro, Google Slides, Microsoft Powerpoint
        </p>
      </Col>
    </Row>
    <Row>
      <Col s={12} m={4} l={4}>
        <a href="http://srtlabs.com/">
          <img
            src={require("../img/srt.png")}
            alt="Service Robotics and Technologies logo"
            title="Service Robotics and Technologies logo"
          />
        </a>
      </Col>
      <Col s={12} m={8} l={8}>
        <h5>Service Robotics &amp; Technologies</h5>
        <h6>
          Front End Software Developer
          <br />
          October 2018 - Present
        </h6>
        <p>
          Service Robotics Technologies, Inc. (SRT) is a Virginia-based service
          robotics integration company bringing smart building systems to
          service industry businesses and commercial facilities.
          <br />
          <br />
          My role as a Front End Software Developer focused on improving user experience
          as well debugging several errors within the ReactJS framework so that
          project could successfully move from a 'beta' project to their 'MVP'
          that they needed to present at a conference by the end of the month.
        </p>
        <p>Technologies Used: ReactJS, PHP, Symphony, JavaScript(ES6), CSS3 </p>
      </Col>
    </Row>
    <Row>
      <Col s={12} m={4} l={4}>
        <a href="http://www.happytailva.com/">
          <img
            src={require("../img/happytail.png")}
            alt="Happy Tail Logo"
            title="Happy Tail VA LLC"
          />
        </a>
      </Col>
      <Col s={12} m={8} l={8}>
        <h5>Happy Tail VA LLC</h5>
        <h6>
          Web Developer | UX Designer
          <br />
          March 2018 - April 2018
        </h6>
        <p>
          Happy Tail VA LLC is a animal care company that provides services such
          as dog walking, animal boarding, and vaccination administration. I was
          asked to redesign their website with an attractive color scheme and
          flexible layout optimal for mobile, tablet, and desktop view.
        </p>
        <p>
          Technologies Used: JavaScript(ES6), HTML5 + CSS, SASS, Bootstrap,
          Surge (for deployment)
        </p>
      </Col>
    </Row>
  </Row>
);

export default Employment;
