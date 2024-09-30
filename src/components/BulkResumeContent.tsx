import Education from "./Education";
import ProfessionalExperience from "./ProfessionalExperience";
import ProfessionalSummary from "./ProfessionalSummary";
import Projects from "./Projects";

export default function BulkResumeContent(): JSX.Element {
    return <div className="inner-container w-full p-6">
    <ProfessionalSummary />
    <Education />
    <ProfessionalExperience />
    <Projects />
  </div>
}