import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IDeletePostModal } from "../interfaces";

export class DeletePostModal extends React.Component<IDeletePostModal> {
  render() {
    return (
      <Modal
        size="sm"
        show={this.props.show}
        onHide={this.props.onHide}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Body>
          <p>Czy chcesz usunąć wpis?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onDelete}>
            <FontAwesomeIcon icon="trash-alt" /> Usuń
          </Button>
          <Button variant="secondary" onClick={this.props.onHide}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
