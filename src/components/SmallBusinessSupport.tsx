import FadeUp from "./FadeUp/FadeUp";
import SectionTitle from "./SectionTitle";
import { smallBusinessData } from "../data/text";
import { ExperienceData } from "../types";
import { useState } from "react";

// Group small business experiences by time periods
const timelinePeriods = [
  {
    period: "2025",
    jobs: smallBusinessData.filter(job => 
      job.dateStarted.includes("2025") || 
      (job.dateEnded && job.dateEnded.includes("2025"))
    )
  },
  {
    period: "2018 - 2019",
    jobs: smallBusinessData.filter(job => 
      job.dateStarted.includes("2018") || 
      job.dateStarted.includes("2019") || 
      (job.dateEnded && job.dateEnded.includes("2019"))
    )
  }
];

export default function SmallBusinessSupport(): JSX.Element {
  const [expandedJobs, setExpandedJobs] = useState<{[key: string]: boolean}>({});

  const toggleJobDetails = (jobId: string) => {
    setExpandedJobs(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };

  return (
    <FadeUp cascade className="resume-object w-full p-4">
      <SectionTitle title="Small Business Support" />
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-6">Consulting and freelance projects</h3>
        
        {timelinePeriods.map((timePeriod, periodIndex) => (
          <div key={periodIndex} className="mb-12">
            {timePeriod.jobs.map((job: ExperienceData, jobIndex: number) => {
              const jobId = `sb-${periodIndex}-${jobIndex}`;
              const isExpanded = expandedJobs[jobId] || false;
              
              return (
                <div key={jobId} className={`relative ${jobIndex !== timePeriod.jobs.length - 1 ? 'mb-8' : ''}`}>
                  <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="md:w-2/3 pr-4">
                      <div className="flex items-center mb-2 pl-8">
                        <div className="w-12 h-12 bg-white flex items-center justify-center overflow-hidden rounded-full mr-4 flex-shrink-0">
                          <img
                            src={job.logo}
                            alt={`${job.jobName} Official Logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h4 className="text-xl font-bold">{job.jobTitle} at {job.jobName}</h4>
                      </div>
                      
                      <p className="text-gray-600 mb-2 pl-8">
                        {job.location}
                      </p>
                      
                      <p className="text-gray-700 mb-4 pl-8">
                        {job.skillsUsed[0].split('.')[0]}...
                      </p>
                      
                      <button 
                        onClick={() => toggleJobDetails(jobId)}
                        className="text-blue-500 hover:text-blue-700 font-medium ml-8"
                      >
                        {isExpanded ? 'Show less' : 'Show more'}
                      </button>
                      
                      {isExpanded && (
                        <ul className="list-disc ml-14 mt-4 text-left">
                          {job.skillsUsed.map((skill: string, i: number) => (
                            <li key={i} className="mb-2">{skill}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    
                    <div className="md:w-1/3 text-right mt-4 md:mt-0">
                      <h3 className="text-3xl font-bold text-gray-800">{timePeriod.period}</h3>
                      <p className="text-gray-600">
                        {job.dateStarted} {job.dateEnded ? `to ${job.dateEnded}` : "to Current"}
                      </p>
                    </div>
                  </div>
                  
                  {jobIndex !== timePeriod.jobs.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 h-full"></div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </FadeUp>
  );
}
