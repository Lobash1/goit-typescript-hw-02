import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { IoMdClose } from "react-icons/io";

Modal.setAppElement("#root");

interface ImageModalProp {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageUrl,
  imageAlt,
}: ImageModalProp) {
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={200}
      onRequestClose={onClose}
    >
      <button
        className={css.closeButton}
        onClick={onClose}
        aria-label="Close modal"
      >
        <IoMdClose />
      </button>

      <div className={css.modalContent}>
        <img src={imageUrl} alt={imageAlt} className={css.modalImage} />
      </div>
    </Modal>
  );
}
