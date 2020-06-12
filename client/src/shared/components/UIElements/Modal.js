import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "../UIElements/Backdrop";
import "./Modal.css";

const ModalOverlay = ({
  className,
  style,
  headerClass,
  header,
  handleSubmit,
  contentClass,
  children,
  footerClass,
  footer,
}) => {
  const content = (
    <div className={`modal ${className}`} style={{ style }}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <header>
        <form
          onSubmit={handleSubmit ? handleSubmit : (evt) => evt.preventDefault()}
        >
          <div className={`modal__content ${contentClass}`}>{children}</div>
          <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
        </form>
      </header>
    </div>
  );
  return ReactDom.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = ({ show, onCancel, ...otherProps }) => {
  return (
    <Fragment>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...otherProps} />
      </CSSTransition>
    </Fragment>
  );
};

export default Modal;
