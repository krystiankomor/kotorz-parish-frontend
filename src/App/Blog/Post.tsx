import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";

import { IPostEntry, IPostEntryState } from "./interfaces";
import { EditPostModal, DeletePostModal } from "./modals";

import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { moment } from "../utils/Moment";
import { BASE_API_URL, BLOG_URL, API_DATE_FORMAT } from "../utils/settings";

class BlogEntry extends React.Component<IPostEntry, IPostEntryState> {
  constructor(props: IPostEntry) {
    super(props);

    this.state = {
      id: props.id,
      title: props.title,
      slug: props.slug,
      date: props.date,
      body: props.body,
      extraBody: props.extraBody,
      onDelete: props.onDelete,
      showEditModal: false,
      showDeleteModal: false,
      openShowMore: false,
    };
  }

  updateState(blogEntry: IPostEntry): void {
    this.setState({
      id: blogEntry.id,
      title: blogEntry.title,
      slug: blogEntry.slug,
      date: blogEntry.date,
      body: blogEntry.body,
      extraBody: blogEntry.extraBody,
    });
  }

  updateShowEditModal(state: boolean): void {
    this.setState({ showEditModal: state });
  }

  updateShowDeleteModal(state: boolean): void {
    this.setState({ showDeleteModal: state });
  }

  deletePost() {
    fetch(`${BASE_API_URL}${BLOG_URL}/${this.state.id}`, {
      method: "DELETE",
    })
      .then((response) => console.log(response.ok))
      .then(() => this.state.onDelete())
      .then(() => this.updateShowDeleteModal(false))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className="p-3">
        <DropdownButton
          alignRight
          id={`${uuidv4()}`}
          className="float-right"
          variant="secondary"
          title={<FontAwesomeIcon icon="cog" />}
        >
          <Dropdown.Item onClick={() => this.updateShowEditModal(true)}>
            <FontAwesomeIcon icon="edit" /> Edytuj
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item
            onClick={() => this.updateShowDeleteModal(true)}
            className="text-danger"
          >
            <FontAwesomeIcon icon="trash-alt" /> Usuń
          </Dropdown.Item>
        </DropdownButton>

        <h2>
          <a
            href={`./${this.state.slug}`}
            className="text-reset font-weight-bold"
          >
            {this.state.title}
          </a>
        </h2>

        <div className="mb-2 text-muted">
          {moment(this.state.date, API_DATE_FORMAT).format("dddd, D MMMM YYYY")}
        </div>

        <div className="text-justify">{ReactHtmlParser(this.state.body)}</div>

        {this.state.extraBody !== null && this.state.extraBody.length > 0 && (
          <>
            <Button
              onClick={() => this.setState({ openShowMore: true })}
              aria-controls="example-collapse-text"
              aria-expanded={this.state.openShowMore}
              size="lg"
              variant="info"
              hidden={this.state.openShowMore}
              className="my-3"
              block
            >
              Czytaj więcej...
            </Button>

            <Collapse in={this.state.openShowMore}>
              <div className="text-justify" id="example-collapse-text">
                {ReactHtmlParser(this.state.extraBody)}
              </div>
            </Collapse>
          </>
        )}
        <EditPostModal
          post={this.state}
          showModal={this.state.showEditModal}
          onHide={() => this.setState({ showEditModal: false })}
          afterUpdate={(blogEntry) => this.updateState(blogEntry)}
        />
        <DeletePostModal
          onDelete={() => this.deletePost()}
          onHide={() => this.updateShowDeleteModal(false)}
          show={this.state.showDeleteModal}
        />
      </div>
    );
  }
}

export { BlogEntry };
