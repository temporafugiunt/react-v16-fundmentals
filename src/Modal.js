import React from "react";
import { createPortal } from "react-dom";

class Modal extends React.Component {
  // This is run the first time the component enters the DOM, so this
  // won't happen for server side node.js rendering.
  componentDidMount() {
    this.el = document.createElement("div");
    this.modalRoot = document.getElementById("modal");
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
