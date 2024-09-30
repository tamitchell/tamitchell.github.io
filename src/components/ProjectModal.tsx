import { useState } from "react";
import Modal from "./Modal/Modal";
import ModalHeader from "./Modal/ModalHeader";
import ModalBody from "./Modal/ModalBody";
import ModalFooter from "./Modal/ModalFooter";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface ProjectModalProps {
  modalTitle: string;
  modalBody: string[];
  modalImg: string;
  confirmText: string;
  dismissalText: string;
  githubLink: string | null;
  link?: string;
  className?: string;
}

export default function ProjectModal({ modalTitle,
  modalBody,
  modalImg,
  githubLink,
  link,
}: ProjectModalProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const toggle = () => setModalOpen(!isModalOpen);
  const handleConfirm = () => {
    alert("Confirmed!");
    closeModal();
  };

  return (
    <div>
      {/* Modal Trigger */}
      <button onClick={openModal} className="m-2 w-[18vw] min-w-[300px] min-h-[30vh] max-h-[30vh] bg-transparent border-none hover:scale-105 transition-transform duration-200 ease-in-out">
        <img src={modalImg} alt={`${modalTitle} Image Button Overlay`} />
        <p className="text-center uppercase text-base tracking-wide text-gray-700">
          {modalTitle}
        </p>
      </button>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalTitle}
        onConfirm={handleConfirm}
      >
        <ModalHeader toggle={toggle}>
          <div className="flex justify-between items-center mb-4 p-4 border-b-2">
            <h2 className="text-2xl font-semibold">{modalTitle}</h2>
            <button onClick={toggle} className="text-gray-500 hover:text-gray-700 focus:outline-none">
             <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </ModalHeader>
        <ModalBody isOpen={isModalOpen} toggle={toggle}>
          <div className="p-6 bg-white w-full max-w-2xl mx-auto">

            {/* Modal Image */}
            {modalImg && (
              <div className="mb-4">
                <img src={modalImg} alt={`${modalTitle} Picture`} className="w-full h-auto rounded" />
              </div>
            )}

            {/* Modal Body */}
            <div className="mb-4">
              {modalBody.map((paragraph, i) => (
                <p key={i} className="text-gray-700 text-sm mb-2">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Github Link */}
            {githubLink && (
              <div className="mb-4">
                <p className="text-gray-600 text-sm">
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" className="underline text-blue-500">
                    Learn more on Github
                  </a>
                </p>
              </div>
            )}

          </div>
        </ModalBody>
        <ModalFooter isOpen={isModalOpen} toggle={toggle}>
          {/* Modal Footer */}
          <div className="flex justify-end p-4 border-t-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              <a href={link} target="_blank" rel="noopener noreferrer" >See Application</a>
            </button>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded" onClick={closeModal}>
              Close
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}