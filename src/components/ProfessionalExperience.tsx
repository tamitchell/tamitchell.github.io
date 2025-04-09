import { experienceData } from "../data/text";
import FadeUp from "./FadeUp/FadeUp";
import SectionTitle from "./SectionTitle";
import { useState } from "react";

// Group experiences by time periods
const timelinePeriods = [
  {
    period: "2021 - Now",
    jobs: experienceData.filter(job => 
      job.dateStarted.includes("2021") || 
      job.dateStarted.includes("2022") || 
      job.dateStarted.includes("2023") || 
      job.dateStarted.includes("2024") || 
      job.dateStarted.includes("2025")
    )
  },
  {
    period: "2019 - 2021",
    jobs: experienceData.filter(job => 
      job.dateStarted.includes("2019") || 
      job.dateStarted.includes("2020") ||
      (job.dateEnded && job.dateEnded.includes("2021"))
    )
  },
  {
    period: "2018 - 2019",
    jobs: experienceData.filter(job => 
      job.dateStarted.includes("2018") || 
      (job.dateEnded && job.dateEnded.includes("2019"))
    )
  }
];

export default function ProfessionalExperience(): JSX.Element {
  const [expandedJobs, setExpandedJobs] = useState<{[key: string]: boolean}>({});

  const toggleJobDetails = (jobId: string) => {
    setExpandedJobs(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };

  return (
    <FadeUp cascade className="resume-object w-full p-4">
      <SectionTitle title="Professional Experience" />
      <div className="mt-8">        
        {timelinePeriods.map((timePeriod, periodIndex) => (
          <div key={periodIndex} className="mb-12">
            {timePeriod.jobs.map((job, jobIndex) => {
              const jobId = `${periodIndex}-${jobIndex}`;
              const isExpanded = expandedJobs[jobId] || false;
              
              return (
                <div key={jobId} className={`relative ${jobIndex !== timePeriod.jobs.length - 1 ? 'mb-8' : ''}`}>
                  <div className="grid grid-cols-[auto_1fr] gap-4">
                    {/* Left column: Logo and connector line */}
                    <div className="relative flex flex-col items-center">
                      <div className="w-12 h-12 bg-white flex items-center justify-center overflow-hidden rounded-full flex-shrink-0">
                        <img
                          src={job.logo}
                          alt={`${job.jobName} Official Logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* Connector line */}
                      {jobIndex !== timePeriod.jobs.length - 1 && (
                        <div className="w-0.5 bg-gray-200 h-full absolute top-12 left-1/2 transform -translate-x-1/2"></div>
                      )}
                    </div>
                    
                    {/* Right column: Job details */}
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2">
                      {/* Job title and details */}
                      <div>
                        <h4 className="text-xl font-bold mb-2">{job.jobTitle} at {job.jobName}</h4>
                        <p className="text-gray-600 mb-2 italic">
                          {job.location}
                        </p>
                        
                        <p className="text-gray-700 mb-4">
                          {job.skillsUsed[0].split('.')[0]}...
                        </p>
                        
                        <button 
                          onClick={() => toggleJobDetails(jobId)}
                          className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                          {isExpanded ? 'Show less' : 'Show more'}
                        </button>
                        
                        {isExpanded && (
                          <ul className="list-disc ml-6 mt-4 text-left">
                            {job.skillsUsed.map((skill, i) => (
                              <li key={i} className="mb-2">{skill}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      
                      {/* Time period */}
                      <div className="text-right">
                        <h3 className="text-lg font-bold text-gray-800">{timePeriod.period}</h3>
                        <p className="text-gray-600 italic">
                          {job.dateStarted} {job.dateEnded ? `to ${job.dateEnded}` : "to Current"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </FadeUp>
  );
}
