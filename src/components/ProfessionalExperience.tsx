import { experienceData } from "../data/text";
import FadeUp from "./FadeUp/FadeUp";
import SectionTitle from "./SectionTitle";

export default function ProfessionalExperience(): JSX.Element {
    return <FadeUp cascade className="resume-object w-full p-4">
      <SectionTitle title="Professional Experience" />
    {experienceData.map((job, i) => (
      <div className="experience-object mb-6" key={i}>
        <div className="flex items-center">
        <div className="flex-shrink-0 self-start w-20 h-20 md:w-26 md:h-26 lg:w-30 lg:h-30 bg-white flex items-center justify-center overflow-hidden">
        {job.logo && <img
          src={job.logo}
          alt={`${job.jobName} Official Logo`}
          className="max-w-full max-h-full object-contain"
        />}
      </div>
          <div className="experience-content ml-4">
            <h4 className="text-xl font-semibold">{job.jobName}</h4>
            <div className="flex justify-between items-center self-start">
              <h5 className="text-lg font-semibold uppercase text-[#888] py-2">{job.jobTitle}</h5>
              <p>
                {job.location} <br />
                {job.dateStarted}{" "}
                {job.dateEnded !== null ? "to " + job.dateEnded : "to Current"}
              </p>
            </div>
            <ul className="list-disc ml-6 mt-4">
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