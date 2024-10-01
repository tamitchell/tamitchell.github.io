import resumePDF from "../data/mitchell_tasha_resume_portfolio.pdf";

export default function Footer(): JSX.Element {
    return   <div className="footer w-full bg-gray-800 text-center text-white">
    
    {/* <div className="mt-4">
      <h4 className="text-white text-lg font-semibold">Certifications</h4>
      <ul className="mt-2">
        <li>ICAgile · ICAgile Certified Professional (ICP) - Feb. 2019</li>
        <li>Human Factors International · Certified Usability Analyst - June 2019</li>
        <li>SAFe Certified Professional - Nov. 2019</li>
      </ul>
    </div> */}

    {/* Second row: Download Resume button */}
    <div className="inner-container p-4">
      <button className="confirmation-button bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        <a href={resumePDF} download>
          Download Resume
        </a>
      </button>
    </div>

    <div className="w-full bg-[#0F151E] p-4 mt-auto">
    <p>&copy; 2024 Tasha Mitchell. All Rights Reserved.</p>
    </div>
  </div>
}