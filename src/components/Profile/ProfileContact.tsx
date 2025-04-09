import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobeAmericas,
  faMapMarked,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { profileData } from "../../data/text";

export function ProfileContact(): JSX.Element {
  return (
    <div className="text-left">
      {profileData.email && <p className="my-2">
        <a href={`mailto:${profileData.email}`} className="hover:text-blue-cornflower">
          <FontAwesomeIcon icon={faEnvelope} /> {profileData.email}
        </a>
      </p>}
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
      {profileData.openToWork && (
        <p className="my-2 flex items-center">
          <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
          <span className="flex items-center">
            Open to Work
            <span className="ml-2 inline-block w-3 h-3 rounded-full bg-green-500 animate-pulse" title="Open to Work"></span>
          </span>
        </p>
      )}
    </div>
  );
}
