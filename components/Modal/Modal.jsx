import { Modal, Icon } from "semantic-ui-react";
import React from "react";

const Modal = (props) => {
  const { show, setCloseModal, hadline, content, children } = props;
  return (
    <Modal show={showModal} onClick={() => setCloseModal(false)}>
      <Modal.Header>{headline}</Modal.Header>
      <Modal.Content>{content}</Modal.Content>
      <Modal.Footer>{children}</Modal.Footer>
    </Modal>
  );
};

export default Modal;
