import Education from "./Education";
import HeroSection from "./HeroSection";
import ProfessionalExperience from "./ProfessionalExperience";
import ProfessionalSummary from "./ProfessionalSummary";
import Projects from "./Projects";
import SmallBusinessSupport from "./SmallBusinessSupport";

export default function BulkResumeContent(): JSX.Element {
    return <div className="inner-container w-full p-6">
    <ProfessionalSummary />
    <Education />
    <Projects />
    <SmallBusinessSupport />
    <ProfessionalExperience />
  </div>
}
