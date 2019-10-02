import React from "react";
import { Modal } from 'react-bootstrap'
 
export default class ModalWindow extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        {this.props.children}
      </Modal>
    );
  }
}
