import React from "react";
import Modal from "react-modal";
// import css from "./ImageModal.module.css"

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "none",
    overflow: "visible",
    height: "500px",
    width: "auto",
  },
};

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, imageUrl }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <img src={imageUrl} alt="Large" />
    </Modal>
  );
}
