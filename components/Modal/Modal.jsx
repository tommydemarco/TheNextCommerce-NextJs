import { Modal, Icon } from "semantic-ui-react";
import React from "react";

const Modal = (props) => {
  return (
    <Modal>
      <Modal.Header>Hello from the cmodal</Modal.Header>
      <Modal.Content>The modal content</Modal.Content>
      <Modal.Footer>And here the cmodal footer</Modal.Footer>
    </Modal>
  );
};

export default Modal;
