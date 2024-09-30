import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobeAmericas,
  faMapMarked,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { profileData } from "../../data/text";

export function ProfileContact(): JSX.Element {
  return (
    <div className="text-left">
      <p className="my-2">
        <a href={`mailto:${profileData.email}`} className="text-blue-500">
          <FontAwesomeIcon icon={faEnvelope} /> {profileData.email}
        </a>
      </p>
      <p className="my-2">
        <a
          href={`http://${profileData.portfolio}/`}
          className="text-blue-500"
        >
          <FontAwesomeIcon icon={faGlobeAmericas} /> {profileData.portfolio}
        </a>
      </p>
      <p className="my-2">
        <FontAwesomeIcon icon={faMapMarked} /> {profileData.placeOfWork}
      </p>
      <p className="my-2">
        <a href={`${profileData.linkedInLink}`} className="text-blue-500">
          <FontAwesomeIcon icon={faLinkedin} /> tashamitchell
        </a>
      </p>
      <p className="my-2">
        <a href={`${profileData.githubLink}`} className="text-blue-500">
          <FontAwesomeIcon icon={faGithub} /> tamitchell
        </a>
      </p>
    </div>
  );
}