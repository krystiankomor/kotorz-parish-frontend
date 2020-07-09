import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { BASE_API_URL, BLOG_URL, API_DATE_FORMAT } from "../../utils/settings";
import { IPostModal } from "../interfaces/IPostModal";

import { IPostModalState } from "../interfaces";
import { TextEditor } from "../../utils/TextEditor";
import { DatePicker } from "../../utils/DatePicker";
import { moment } from "../../utils/Moment";

type FormControlElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export class CreatePostModal extends React.Component<
  IPostModal,
  IPostModalState
> {
  constructor(parameters: IPostModal) {
    super(parameters);

    let { post } = parameters;

    this.state = {
      id: post.id || undefined,
      title: post.title || undefined,
      slug: post.slug || undefined,
      date: post.date || moment().format(API_DATE_FORMAT),
      body: post.body || "",
      extraBody: post.extraBody || "",
      showDatePicker: false,
    };
  }

  modalTitle: String = "Utwórz wpis";

  resetState(): void {
    this.setState({
      id: undefined,
      title: undefined,
      slug: undefined,
      date: moment().format(API_DATE_FORMAT),
      body: "",
      extraBody: "",
      showDatePicker: false,
    });
  }

  handleInputChange(event: React.ChangeEvent<FormControlElement>) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    } as any);
  }

  handleBodyChange(newBodyValue: any) {
    this.setState({ body: newBodyValue });
  }

  handleExtraBodyChange(newExtraBodyValue: any) {
    this.setState({ extraBody: newExtraBodyValue });
  }

  handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  submit() {
    fetch(`${BASE_API_URL}${BLOG_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.afterUpdate(data);
        this.props.onHide();
        this.resetState();
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="modal-title"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">{this.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleFormSubmit.bind(this)}>
            <Form.Group>
              <Form.Label>Tytuł</Form.Label>
              <Form.Control
                placeholder="Podaj tytuł wpisu"
                value={this.state.title}
                name="title"
                onChange={this.handleInputChange.bind(this)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Data</Form.Label>
              <div>
                <DatePicker
                  date={this.state.date}
                  onDateChange={(newDate: any) => {
                    this.setState({ date: newDate?.format(API_DATE_FORMAT) });
                  }}
                  focused={this.state.showDatePicker}
                  onFocusChange={() => {
                    this.setState({
                      showDatePicker: !this.state.showDatePicker,
                    });
                  }}
                />
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Treść</Form.Label>
              <TextEditor
                value={this.state.body}
                onChange={this.handleBodyChange.bind(this)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Treść dodatkowa</Form.Label>
              <TextEditor
                value={this.state.extraBody}
                onChange={this.handleExtraBodyChange.bind(this)}
              />
              <Form.Text muted>
                Tekst ten będzie widoczny po naciśnięciu przycisku "Czytaj
                więcej". Jeśli pozostanie pusty, przycisk się nie pokaże.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={this.submit.bind(this)}>
            Zapisz
          </Button>
          <Button type="button" onClick={this.props.onHide} variant="secondary">
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
