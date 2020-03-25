import React from "react";
import { Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobeAmericas,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { profileData } from "./data";

const Profile = () => (
  <Container>
    <Row>
      <div className="profile-pic-container">
        <img src={require("../img/profile-me.jpg")} />
      </div>
    </Row>
    <Row>
      <div className="profile-content">
        <h2>{profileData.name}</h2>
        <h6>
          {profileData.occupationPrimary} | {profileData.occupationSecondary}
        </h6>
        <p>
          <a href={`mailto:${profileData.email}`}>
            <FontAwesomeIcon icon={faEnvelope} /> {profileData.email}{" "}
          </a>
        </p>
        <p>
          <a href={`http://${profileData.portfolio}/`}>
            <FontAwesomeIcon icon={faGlobeAmericas} />
            {profileData.portfolio}{" "}
          </a>{" "}
        </p>
        <p>
          {" "}
          <a href={`tel:+0${profileData.phone}`}>
            <FontAwesomeIcon icon={faPhone} /> {profileData.phone}{" "}
          </a>{" "}
        </p>
        <p>
          {" "}
          <a href={`${profileData.linkedInLink}`}>
            {" "}
            <FontAwesomeIcon icon={faLinkedin} /> tashamitchell{" "}
          </a>{" "}
        </p>
        <p>
          {" "}
          <a href={`${profileData.githubLink}`}>
            {" "}
            <FontAwesomeIcon icon={faGithub} /> tamitchell{" "}
          </a>{" "}
        </p>
      </div>
    </Row>
  </Container>
);

export default Profile;
