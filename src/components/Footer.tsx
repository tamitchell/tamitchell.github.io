import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resumePDF from "../data/mitchell_tasha_resume_portfolio.pdf";

export default function Footer(): JSX.Element {
    return   <div className="footer w-full bg-gray-800 py-6 text-center text-white">
    {/* First row: Message */}
    <div className="inner-container mb-4">
      <p>
        This project was made with{" "}
        <FontAwesomeIcon icon={faHeart} className="text-red-500" /> in
        <a href="https://reactjs.org/" className="text-blue-400 underline ml-1">
          React.js
        </a>
      </p>
    </div>
    
    {/* Second row: Download Resume button */}
    <div className="inner-container">
      <button className="confirmation-button bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        <a href={resumePDF} download>
          Download Resume
        </a>
      </button>
    </div>
  </div>
}