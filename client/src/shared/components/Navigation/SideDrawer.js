import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./SideDrawer.css";

const SideDrawer = ({ children, show, handleDrawerClose }) => {
  const content = (
    <CSSTransition
      in={show} // true -> show \ false -> hide
      timeout={200} // in ms
      classNames="slide-in-left" // 4 classes in CSS to handle animate (index.css)
      mountOnEnter
      unmountOnExit // remove after unmount, not just hide
    >
      <aside className="side-drawer" onClick={handleDrawerClose}>
        {children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
