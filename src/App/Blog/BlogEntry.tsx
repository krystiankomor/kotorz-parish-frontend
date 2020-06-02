import React from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Modal from "react-bootstrap/Modal";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import { BlogEntryProps } from "./BlogEntryProps";

interface State extends BlogEntryProps {
  showEditModal: boolean;
}

interface EditModalProps {
  show: boolean;
  onHide: () => void;
  state: State;
}

class BlogEntry extends React.Component<BlogEntryProps, State> {
  constructor(props: BlogEntryProps) {
    super(props);

    this.state = {
      id: props.id,
      title: props.title,
      date: props.date,
      text: props.text,
      hidden: props.hidden,
      showEditModal: false,
    };
  }

  //TODO: Add form for editing
  editModal(props: EditModalProps) {
    return (
      <Modal
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => props.onHide()}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edytuj post "{props.state.title}"
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.onHide()}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  updateShowEditModal(state: boolean): void {
    this.setState({ showEditModal: state });
  }

  //TODO: hidden entry
  render() {
    return (
      <div className="p-3">
        <DropdownButton
          alignRight
          id={`${uuidv4()}`}
          className="float-right"
          variant="primary"
          title={<FontAwesomeIcon icon="cog" />}
        >
          <Dropdown.Item onClick={() => this.updateShowEditModal(true)}>
            <FontAwesomeIcon icon="edit" /> Edytuj
          </Dropdown.Item>
          <Dropdown.Item>
            <FontAwesomeIcon icon="eye-slash" /> Ukryj
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2" className="text-danger">
            <FontAwesomeIcon icon="trash-alt" /> Usuń
          </Dropdown.Item>
        </DropdownButton>
        <h2>
          <a href="#" className="text-reset font-weight-bold">
            {this.state.title}
          </a>
        </h2>
        <div className="mb-2 text-muted">{this.state.date}</div>
        <div className="text-justify">{ReactHtmlParser(this.state.text)}</div>
        <this.editModal
          show={this.state.showEditModal}
          onHide={() => this.updateShowEditModal(false)}
          state={this.state}
        />
      </div>
    );
  }
}

export { BlogEntry };
