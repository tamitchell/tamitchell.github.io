import React from "react";
import { Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobeAmericas,
  faMapMarked
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { profileData } from "./data";

const Profile = () => (
  <Container>
    <Row>
      <div className="profile-pic-container d-print-none">
        <img
          oncontextmenu="return false"
          src={require("../img/profile-me.jpg")}
          alt="The developer"
        />
      </div>
    </Row>
    <Row>
      <div className="profile-content">
        <h1>{profileData.name}</h1>
        <h4>
          {profileData.occupationPrimary} | {profileData.occupationSecondary}
        </h4>
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
          <FontAwesomeIcon icon={faMapMarked} /> {profileData.placeOfWork}{" "}
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
