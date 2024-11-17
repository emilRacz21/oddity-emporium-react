import "./ShowModal.scss";
import { createPortal } from "react-dom";

export default function ShowModal({
  modalStatus,
  children,
  title,
  modalDisable,
}) {
  modalStatus
    ? (() => {
        document.getElementById("root").classList.add("active");
        document.getElementById("root").classList.remove("disabled");
      })()
    : (() => {
        document.getElementById("root").classList.remove("active");
        document.getElementById("root").classList.add("disabled");
      })();

  return createPortal(
    <dialog
      open
      className={`show-modal ${modalStatus ? "active" : "disabled"}`}
    >
      <section className="dialog-nav">
        <h2>{title}</h2>
        <h2
          className="modal-x"
          onClick={() => {
            modalDisable(false);
          }}
        >
          X
        </h2>
      </section>
      <section className="dialog-content">{children}</section>
    </dialog>,
    document.body
  );
}
