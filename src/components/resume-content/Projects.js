import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
} from "reactstrap";
import { projectData } from "../data";
import CustomModal from '../CustomModal';
import { Spinner } from 'reactstrap';


const Projects = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, );


  return (
    <Container className="resume-object">
      <h2>Web Development Projects</h2>
     { isLoaded ? <Row>
        {projectData.map((project, i) => {
          const props = {
            modalTitle: project.projectName,
            modalImg: project.previewImage,
            modalBody: [project.projectSummary, project.technologiesUsed],
            link: project.deployedApplication,
            githubLink: project.githubLink,
            confirmText: "See Application",
            dismissalText: "Close",
            className: 'card-button'
          }
          return (
           <CustomModal key={i} props={props}/>
          );
        })}
      </Row> : <Row className="loading-container">
      <Spinner class="loading-icon" size="lg" type="grow" color="primary" />
      </Row>
}    </Container>
  );
};

export default Projects;
