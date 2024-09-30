import { educationData } from "../data/text";
import FadeUp from "./FadeUp/FadeUp";
import SectionTitle from "./SectionTitle";

export default function Education(): JSX.Element {
    return   <FadeUp cascade className="w-full p-4">
      <SectionTitle title="Education"/>
    {educationData.college.map((school, i) => (
      <div className="education-object mb-6" key={i}>
        <div className="flex flex-row items-center">
        <div className="flex-shrink-0 w-20 h-20 md:w-26 md:h-26 lg:w-30 lg:h-30 bg-white flex items-center justify-center overflow-hidden">
        <img
          src={school.logo}
          alt={`${school.schoolName} Official Logo`}
          className="max-w-full max-h-full object-contain"
        />
      </div>
          <div className="education-content ml-4">
            <h4 className="text-xl font-semibold">{school.schoolName}</h4>
            <div className="flex justify-between items-center">
              <h5 className="text-lg font-semibold uppercase text-[#888] py-2">{school.degree}</h5>
              <p>{school.graduationDate}</p>
            </div>
            <p>{school.additionalNote}</p>
          </div>
        </div>
      </div>
    ))}
  </FadeUp>
}