import { useEffect, useState } from "react";
import { projectData } from "../data/text";
import ProjectModal from "./ProjectModal";
import SectionTitle from "./SectionTitle";
import FadeUp from "./FadeUp/FadeUp";

export default function Projects(): JSX.Element {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 3000);
    }, []);
  
    return (
      <FadeUp cascade className="resume-object w-full p-4">
        <SectionTitle title="Projects"/>
        {isLoaded ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectData.map((project, i) => {
              const props = {
                modalTitle: project.projectName,
                modalImg: project.previewImage,
                modalBody: [project.projectSummary, project.technologiesUsed],
                link: project.deployedApplication,
                githubLink: project.githubLink,
                confirmText: "See Application",
                dismissalText: "Close",
                className: "card-button",
              };
              return <ProjectModal key={i} {...props} />;
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            {/* <Spinner className="loading-icon" size="lg" type="grow" color="primary" /> */}
          </div>
        )}
      </FadeUp>
    );
}