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
        <a href={`mailto:${profileData.email}`} className="hover:text-blue-cornflower">
          <FontAwesomeIcon icon={faEnvelope} /> {profileData.email}
        </a>
      </p>
      <p className="my-2">
        <a
          href={`http://${profileData.portfolio}/`}
          className="hover:text-blue-cornflower"
        >
          <FontAwesomeIcon icon={faGlobeAmericas} /> {profileData.portfolio}
        </a>
      </p>
      <p className="my-2">
        <FontAwesomeIcon icon={faMapMarked} /> {profileData.placeOfWork}
      </p>
      <p className="my-2">
        <a href={`${profileData.linkedInLink}`} className="hover:text-blue-cornflower">
          <FontAwesomeIcon icon={faLinkedin} /> tashamitchell
        </a>
      </p>
      <p className="my-2">
        <a href={`${profileData.githubLink}`} className="hover:text-blue-cornflower">
          <FontAwesomeIcon icon={faGithub} /> tamitchell
        </a>
      </p>
    </div>
  );
}