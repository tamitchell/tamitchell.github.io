import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { projectData, profileData } from "../data";

const Projects = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <Container className="resume-object">
      <h2>Web Development Projects</h2>
      <Row>
        {projectData.map((project, i) => {
          return (
            <div key={i}>
              <Button className={`project${i} card-button`} onClick={toggle}>
                <p>{project.projectName}</p>
              </Button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{project.projectName}</ModalHeader>
                <ModalBody>
                  <img src={project.previewImage} alt={project.projectName + ' Preview Image '}/>
                  <p>{project.projectSummary}</p>
                  <p>{project.technologiesUsed}</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary">
                    <a href={project.deployedApplication}>
                      See Deployed
                    </a>
                  </Button>{" "}
                  <Button color="secondary" onClick={toggle}>
                    Close
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default Projects;
