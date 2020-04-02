import React from "react";
import { Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import resumePDF from "../documents/mitchell_tasha_resume_portfolio.pdf";

const Footer = () => (
  <Container fluid={true} className="footer">
    <Row className="inner-container">
      <p>
        This project was made with{" "}
        <FontAwesomeIcon icon={faHeart} color={"red"} /> in
        <a href="https://reactjs.org/"> React.js</a>
      </p>
    </Row>
    <Row className="inner-container">
    <button className="confirmation-button">
        <a href={resumePDF} download>
          Download Resume and Portfolio
        </a>
      </button>
    </Row>
  </Container>
);

export default Footer;
