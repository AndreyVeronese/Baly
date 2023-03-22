import { Children, ReactNode, useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

type Props = {
  header: string;
  cancelText?: string;
  confirmText: string;
  children: ReactNode;
  setShowModal: Function;
  confirmFunction: Function;
  cancelFunction: Function;
  loadingModal: string;
};

export const Modal = ({
  header,
  cancelText = "voltar",
  confirmText,
  children,
  setShowModal,
  confirmFunction,
  cancelFunction,
  loadingModal,
}: Props) => {
  function cancel() {
    if (cancelFunction) {
      cancelFunction();
    }
    setShowModal(false);
  }
  function closeModal() {
    setShowModal(false);
  }
  window.onclick = (event) => {
    if (event.target === document.getElementById("myModal")) {
      setShowModal(false);
    }
  };

  return (
    <div className="modal" id="myModal">
      <div className="modalContent">
        <div className="modalHeader">
          <span onClick={closeModal} className="close">
            &times;
          </span>
          <h2>{header}</h2>
        </div>
        <div className="modalBody">{children}</div>

        <div className="modalFooter">
          {cancelFunction && (
            <button className="btn-cancel" onClick={cancel}>
              {cancelText}
            </button>
          )}
          {!cancelFunction && (
            <button className="btn-cancel" onClick={closeModal}>
              {cancelText}
            </button>
          )}
          {confirmFunction && !loadingModal && (
            <button className="btn-sucess" onClick={() => confirmFunction()}>
              {confirmText}
            </button>
          )}
          {confirmFunction && loadingModal && (
            <button disabled>{loadingModal}</button>
          )}
        </div>
      </div>
    </div>
  );
};
