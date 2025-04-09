import { Link } from 'react-router-dom';
import { projectData } from "../data/text";
import SectionTitle from "./SectionTitle";
import FadeUp from "./FadeUp/FadeUp";

export default function Projects(): JSX.Element {
  return (
    <FadeUp cascade className="resume-object w-full p-4">
      <SectionTitle title="Projects"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project, i) => {
          const projectId = project.projectName.toLowerCase().replace(/\s+/g, '-');
          
          return (
            <Link 
              key={i} 
              to={`/projects/${projectId}`}
              className="project-card"
            >
              <div className=" m-2 w-full h-[250px] bg-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 ease-in-out p-4 flex flex-col">
              {project.previewImage && (
                <img 
                  src={project.previewImage} 
                  alt={`${project.projectName}`} 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              )}

              </div>
              <p className="text-center uppercase text-base tracking-wide text-gray-700 mt-2 font-bold">
                {project.projectName}
              </p>
            </Link>
          );
        })}
      </div>
    </FadeUp>
  );
}
