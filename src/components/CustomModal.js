import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const CustomModal = props => {
  const {
    modalTitle,
    modalBody,
    modalImg,
    confirmText,
    dismissalText,
    githubLink,
    link,
    className
  } = props.props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle} className={className}>
        <img src={modalImg} alt={modalTitle + "Image Button Overlay"} />
        <p>{modalTitle}</p>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
        <ModalBody>
          {modalImg !== undefined || modalImg !== null ? (
            <img src={modalImg} alt={modalTitle + " Picture "} />
          ) : (
            ""
          )}
          {modalBody.map((paragraph, i) => {
            return <p key={i}>{paragraph}</p>;
          })}
          {githubLink !== undefined || modalImg !== null ? (
            <p>
              <FontAwesomeIcon icon={faGithub} />{"  "}
              <a href={githubLink}>Learn more on Github</a>
            </p>
          ) : (
            ""
          )}
        </ModalBody>
        <ModalFooter>
          {link !== undefined || link !== null ? (
            <Button color="primary" className="confirmation-button">
              <a href={link}>{confirmText}</a>{" "}
            </Button>
          ) : (
            ""
          )}
          <Button color="secondary" onClick={toggle}>
            {dismissalText}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CustomModal;
