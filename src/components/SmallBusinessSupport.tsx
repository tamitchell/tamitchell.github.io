import FadeUp from "./FadeUp/FadeUp";
import SectionTitle from "./SectionTitle";
import happyTailLogo from "../assets/logo/happyTailLLC.png";
import desiLogo from "../assets/logo/desi.png";
import metiLogo from "../assets/logo/meti.png";
import sehaLogo from "../assets/logo/sehaConsulting.png";

// Group small business experiences by time periods
// const timelinePeriods = [
//   {
//     period: "2025",
//     jobs: smallBusinessData.filter(job => 
//       job.dateStarted.includes("2025") || 
//       (job.dateEnded && job.dateEnded.includes("2025"))
//     )
//   },
//   {
//     period: "2018 - 2019",
//     jobs: smallBusinessData.filter(job => 
//       job.dateStarted.includes("2018") || 
//       job.dateStarted.includes("2019") || 
//       (job.dateEnded && job.dateEnded.includes("2019"))
//     )
//   }
// ];

export default function SmallBusinessSupport(): JSX.Element {
  return (
    <FadeUp cascade className="resume-object w-full p-4">
      <SectionTitle title="Small Business Support" />
      
      {/* Introduction */}
      <div className="mt-4 mb-8">
        <p className="text-lg">
          I'm a proud supporter of small businesses and have worked directly with the stakeholders of these projects to bring their concepts to fruition. I specialize in creating small but impactful marketing sites that improve SEO and client acquisition.
        </p>
      </div>
      
      {/* Business Logos with Links */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-8 justify-start">
          {/* Diversified Electric Services */}
          <a href="http://desielectric.com/" target="_blank" rel="noopener noreferrer" className="block">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-white flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow">
                <img src={desiLogo} alt="Diversified Electric Services" className="w-full h-full object-contain" />
              </div>
              <div className="mt-2 text-center px-2">
                <span className="text-sm font-medium">Diversified Electric Services</span>
              </div>
            </div>
          </a>
          
          {/* MetiStream logo - unlinked */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-white flex items-center justify-center overflow-hidden">
              <img src={metiLogo} alt="MetiStream" className="w-full h-full object-contain" />
            </div>
            <div className="mt-2 text-center px-2">
              <span className="text-sm font-medium">MetiStream (Now Defunct) </span>
            </div>
          </div>
          
          {/* Seha Consulting */}
          <a href="https://www.sehaconsulting.com/" target="_blank" rel="noopener noreferrer" className="block">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-white flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow">
                <img src={sehaLogo} alt="Seha Consulting" className="w-full h-full object-contain" />
              </div>
              <div className="mt-2 text-center px-2">
                <span className="text-sm font-medium">Seha Consulting</span>
              </div>
            </div>
          </a>
          
          {/* Happy Tail */}
          <a href="https://happytailva.com/" target="_blank" rel="noopener noreferrer" className="block">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-white flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow">
                <img src={happyTailLogo} alt="Happy Tail" className="w-full h-full object-contain" />
              </div>
              <div className="mt-2 text-center px-2">
                <span className="text-sm font-medium">Happy Tail</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      
      {/* TODO: Business Opportunities CTA */}
    </FadeUp>
  );
}
