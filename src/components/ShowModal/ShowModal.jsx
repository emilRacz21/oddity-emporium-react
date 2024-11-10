import "./ShowModal.scss";
import { createPortal } from "react-dom";

export default function ShowModal({ isOpen, onClose, dialogContent }) {
  const { title, description } = dialogContent;
  return createPortal(
    <dialog open={isOpen} className="show-modal">
      <section className="dialog-nav">
        <h2>{title}</h2>
        <h2 className="modal-x" onClick={onClose}>
          X
        </h2>
      </section>
      <section className="dialog-content">
        <p>{description}</p>
      </section>
    </dialog>,
    document.body
  );
}
