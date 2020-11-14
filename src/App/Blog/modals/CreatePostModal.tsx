import React from "react";

import { IPostModalState, IPost, IPostModal } from "../interfaces";
// import { TextEditor, DatePicker, moment } from "../../utils";
import {
  BASE_API_URL,
  BLOG_URL,
  POLISH_LOCALE_FOR_CALENDAR,
  SHOW_DATE_FORMAT,
  CALENDAR_DATE_RANGE,
} from "../../utils/settings";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Editor } from "primereact/editor";

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

    this.state = this.getPostModalStateOrDefault(parameters.post);
  }

  modalTitle: String = "Utwórz wpis";

  defaultPostModalState: IPostModalState = {
    id: undefined,
    title: "",
    slug: "",
    date: new Date(),
    body: "",
    extraBody: "",
    showDatePicker: false,
  };

  footer = (
    <div>
      <Button
        label="Zapisz"
        icon="pi pi-save"
        onClick={this.submit.bind(this)}
      />
      <Button label="Anuluj" icon="pi pi-times" onClick={this.props.onHide} />
    </div>
  );

  getPostModalStateOrDefault(post: IPost | undefined): IPostModalState {
    if (post)
      return {
        ...post,
        showDatePicker: false,
      };

    return this.defaultPostModalState;
  }

  resetState(): void {
    this.setState(this.defaultPostModalState);
  }

  handleInputChange(event: any) {
    let target = event.target;
    let value = target.value;
    let name = target.id;

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
      <Dialog
        visible={this.props.showModal}
        onHide={this.props.onHide}
        header={this.modalTitle}
        appendTo={document.body}
        footer={this.footer}
      >
        <div className="p-field">
          <label htmlFor="title" className="p-d-block">
            Tytuł
          </label>
          <InputText
            value={this.state.title}
            onChange={this.handleInputChange.bind(this)}
            id={"title"}
          />
        </div>

        <div className="p-field">
          <label htmlFor="date" className="p-d-block">
            Data
          </label>
          <Calendar
            id="date"
            value={this.state.date}
            onChange={this.handleInputChange.bind(this)}
            dateFormat={SHOW_DATE_FORMAT}
            appendTo={document.body}
            locale={POLISH_LOCALE_FOR_CALENDAR}
            yearRange={CALENDAR_DATE_RANGE}
            showOnFocus={false}
            monthNavigator
            yearNavigator
            showIcon
          />
        </div>

        <div className="p-field">
          <label htmlFor="body">Treść</label>
          <Editor
            id="body"
            style={{ height: "320px" }}
            value={this.state.body}
            onTextChange={(e) => this.setState({ body: e.htmlValue || "" })}
          />
        </div>

        <div className="p-field">
          <label htmlFor="extraBody">Treść dodatkowa</label>
          <Editor
            id="extraBody"
            style={{ height: "320px" }}
            value={this.state.extraBody}
            onTextChange={(e) =>
              this.setState({ extraBody: e.htmlValue || "" })
            }
          />
          <small id="extraBody-help" className="p-d-block">
            Tekst ten będzie widoczny po naciśnięciu przycisku "Czytaj więcej".
            Jeśli pozostanie pusty, przycisk się nie pokaże.
          </small>
        </div>

        {/* <Form.Group>
          <Form.Label>Data</Form.Label>
          <div>
            <DatePicker
              date={this.state.date}
              dateFormat={API_DATE_FORMAT}
              focused={this.state.showDatePicker}
              onDateChange={(newDate: any) => {
                this.setState({ date: newDate?.format(API_DATE_FORMAT) });
              }}
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
            Tekst ten będzie widoczny po naciśnięciu przycisku "Czytaj więcej".
            Jeśli pozostanie pusty, przycisk się nie pokaże.
          </Form.Text>
        </Form.Group> */}
      </Dialog>
    );
  }
}
