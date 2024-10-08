import { experienceData } from "../data/text";
import FadeUp from "./FadeUp/FadeUp";
import SectionTitle from "./SectionTitle";

export default function ProfessionalExperience(): JSX.Element {
    return <FadeUp cascade className="resume-object w-full p-4">
      <SectionTitle title="Professional Experience" />
    {experienceData.map((job, i) => (
        <div className="mb-6" key={i}>
        <div className="flex flex-col items-center sm:flex-row sm:items-start">
          <div className="w-20 h-20 md:w-26 md:h-26 lg:w-30 lg:h-30 bg-white flex items-center justify-center overflow-hidden mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
            <div className="w-full h-full relative" style={{ aspectRatio: '1 / 1' }}>
              <img
                src={job.logo}
                alt={`${job.jobName} Official Logo`}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-center sm:text-left flex-grow">
            <h4 className="text-xl font-semibold">{job.jobName}</h4>
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start flex-wrap">
              <h5 className="text-lg font-semibold uppercase text-[#888] py-2">{job.jobTitle}</h5>
              <p className="text-center sm:text-right">
                {job.dateStarted}{" "}
                {job.dateEnded !== null ? "to " + job.dateEnded : "to Current"}
              </p>
            </div>
            <ul className="list-disc ml-6 mt-4 text-left">
              {job.skillsUsed.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </FadeUp>
}