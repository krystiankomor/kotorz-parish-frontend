import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Jumbotron from "react-bootstrap/Jumbotron";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";

import { IPostEntry, IPostEntryState, IPost } from "./interfaces";
import { EditPostModal, DeletePostModal } from "./modals";
import { PostReadMore } from "./extra/PostReadMore";

import { moment } from "../utils";
import { BASE_API_URL, BLOG_URL, API_DATE_FORMAT } from "../utils/settings";

class PostEntry extends React.Component<IPostEntry, IPostEntryState> {
  constructor(props: IPostEntry) {
    super(props);

    this.state = {
      ...props.data,
      showEditModal: false,
      showDeleteModal: false,
      showPost: true,
      isDeleted: false,
    };
  }

  updateState(blogEntry: IPost): void {
    this.setState(blogEntry);
  }

  updateShowEditModal(state: boolean): void {
    this.setState({ showEditModal: state });
  }

  updateShowDeleteModal(state: boolean): void {
    this.setState({ showDeleteModal: state });
  }

  onDelete() {
    this.setState({ isDeleted: true });
    this.props.onDelete();
  }

  deletePost() {
    fetch(`${BASE_API_URL}${BLOG_URL}/${this.state.id}`, {
      method: "DELETE",
    })
      .then(() => this.onDelete())
      .then(() => this.updateShowDeleteModal(false))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <>
        <Jumbotron hidden={!this.state.isDeleted}>
          <h2 className="text-center text-uppercase">Usunięte</h2>
        </Jumbotron>

        <div className="p-3" hidden={this.state.isDeleted}>
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
            {moment(this.state.date, API_DATE_FORMAT).format(
              "dddd, D MMMM YYYY"
            )}
          </div>

          <div className="text-justify">{ReactHtmlParser(this.state.body)}</div>

          {this.state.extraBody !== null && this.state.extraBody.length > 0 && (
            <PostReadMore text={this.state.extraBody} />
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
      </>
    );
  }
}

export { PostEntry };
