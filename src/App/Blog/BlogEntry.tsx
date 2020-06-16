import React from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Modal from "react-bootstrap/Modal";
import ReactHtmlParser from "react-html-parser";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import { IBlogEntry } from "./IBlogEntry";

interface IState extends IBlogEntry {
  showEditModal: boolean;
  focused: boolean | null;
}

interface EditModalProps {
  show: boolean;
  onHide: () => void;
  state: IState;
}

class BlogEntry extends React.Component<IBlogEntry, IState> {
  constructor(props: IBlogEntry) {
    super(props);

    this.state = {
      id: props.id,
      title: props.title,
      slug: props.slug,
      date: props.date,
      body: props.body,
      extraBody: props.extraBody,
      showEditModal: false,
      focused: false,
    };
  }

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
          <Modal.Title id="contained-modal-title-vcenter">Edytuj</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Tytuł</Form.Label>
              <Form.Control
                placeholder="Podaj tytuł wpisu"
                value={props.state.title}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Data</Form.Label>
              <Form.Control placeholder="Data" value={props.state.date} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Treść</Form.Label>
              <Form.Control as="textarea" rows="4" value={props.state.body} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Treść dodatkowa</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                value={props.state.extraBody}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.onHide()}>Zapisz</Button>
          <Button onClick={() => props.onHide()} variant="secondary">
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  updateShowEditModal(state: boolean): void {
    this.setState({ showEditModal: state });
  }

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

          <Dropdown.Divider />

          <Dropdown.Item href="#/action-2" className="text-danger">
            <FontAwesomeIcon icon="trash-alt" /> Usuń
          </Dropdown.Item>
        </DropdownButton>

        <h2>
          <a
            href={`aktualnosci/${this.state.slug}`}
            className="text-reset font-weight-bold"
          >
            {this.state.title}
          </a>
        </h2>

        <div className="mb-2 text-muted">{this.state.date}</div>

        <div className="text-justify">{ReactHtmlParser(this.state.body)}</div>

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
