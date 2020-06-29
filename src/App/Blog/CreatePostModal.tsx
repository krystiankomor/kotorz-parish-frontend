import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ReactQuill from "react-quill";

import { IBlogEntry } from "./IBlogEntry";
import { BASE_API_URL, BLOG_URL } from "../settings";
import { IBlogModal } from "./IBlogModal";

import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import "moment/locale/pl";

moment.locale("pl");

type FormControlElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

interface IBlogModalEntry extends IBlogEntry {
  showDatePicker: boolean;
}

let DATE_FORMAT = "YYYY-MM-DD";

export class CreatePostModal extends React.Component<
  IBlogModal,
  IBlogModalEntry
> {
  constructor(parameters: IBlogModal) {
    super(parameters);

    let { data } = parameters;

    this.state = {
      id: data.id || undefined,
      title: data.title || undefined,
      slug: data.slug || undefined,
      date: data.date || moment().format(DATE_FORMAT),
      body: data.body || "",
      extraBody: data.extraBody || "",
      showDatePicker: false,
    };
  }

  modalTitle: String = "Utwórz wpis";

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "align",
    "list",
    "bullet",
    "link",
    "image",
  ];

  resetState(): void {
    this.setState({
      id: undefined,
      title: undefined,
      slug: undefined,
      date: moment().format(DATE_FORMAT),
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
        this.props.hideModal();
        this.resetState();
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.hideModal}
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
              {/* <Form.Control
                placeholder="Data"
                value={this.state.date}
                name="date"
                onChange={this.handleInputChange.bind(this)}
              /> */}
              <div>
                <SingleDatePicker
                  date={moment(this.state.date, DATE_FORMAT)}
                  onDateChange={(newDate: any) => {
                    this.setState({ date: newDate?.format(DATE_FORMAT) });
                  }}
                  focused={this.state.showDatePicker}
                  onFocusChange={() => {
                    this.setState({
                      showDatePicker: !this.state.showDatePicker,
                    });
                  }}
                  id="date-picker"
                  numberOfMonths={1}
                  isOutsideRange={() => false}
                />
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Treść</Form.Label>
              <ReactQuill
                theme="snow"
                value={this.state.body}
                onChange={this.handleBodyChange.bind(this)}
                modules={this.modules}
                formats={this.formats}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Treść dodatkowa</Form.Label>
              <ReactQuill
                theme="snow"
                value={this.state.extraBody}
                onChange={this.handleExtraBodyChange.bind(this)}
                modules={this.modules}
                formats={this.formats}
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
          <Button
            type="button"
            onClick={this.props.hideModal}
            variant="secondary"
          >
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
