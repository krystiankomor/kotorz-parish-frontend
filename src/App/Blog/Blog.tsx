import React from "react";
import { PostEntry } from "./PostEntry";
import { IPost } from "./interfaces";
import { BASE_API_URL, BLOG_URL } from "../utils/settings";
import { CreatePostModal, DeletePostModal } from "./modals";
import { v4 as uuidv4 } from "uuid";
import { Button } from "primereact/button";
import { DataScroller } from "primereact/datascroller";
import ReactHtmlParser from "react-html-parser";
import { SplitButton } from "primereact/splitbutton";

interface State {
  entries: IPost[];
  showCreatePostModal: boolean;
  showDeletePostModal: boolean;
}

export class Blog extends React.Component {
  state: State = {
    entries: [],
    showCreatePostModal: false,
    showDeletePostModal: false,
  };

  loadButton: any = null;

  makeRequestAndUpdateState(): void {
    fetch(`${BASE_API_URL}${BLOG_URL}`)
      .then((response) => response.json())
      .then((data: any[]) => {
        data.map((post, _index) => {
          var date = post.date.split("-");
          post.date = new Date(date[0], date[1] - 1, date[2]);
        });

        this.setState({ entries: data });
      });
  }

  componentDidMount(): void {
    this.makeRequestAndUpdateState();
  }

  updateState(blogEntry: IPost): void {
    this.setState(blogEntry);
  }

  updateShowEditModal(state: boolean): void {
    this.setState({ showEditModal: state });
  }

  updateShowDeleteModal(state: boolean): void {
    this.setState({ showDeletePostModal: state });
  }

  onDelete() {
    this.setState({ isDeleted: true });
    // this.props.onDelete();
  }

  deletePost(id: any) {
    fetch(`${BASE_API_URL}${BLOG_URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => this.onDelete())
      .then(() => this.updateShowDeleteModal(false))
      .catch((error) => console.error(error));
  }

  generateBlogEntry(data: IPost) {
    var actionButtons = [
      // {
      //   label: "Edytuj",
      //   icon: "pi pi-pencil",
      //   command: () => {
      //     this.updateShowEditModal(true);
      //   },
      // },
      {
        label: "Usuń",
        icon: "pi pi-trash",
        command: () => {
          this.updateShowDeleteModal(true);
        },
      },
    ];

    return (
      <>
        <div>
          <div className="p-3" /*hidden={this.state.isDeleted}*/>
            <div className="p-d-flex p-jc-between">
              <div>
                <h2>
                  <a
                    href={`./${data.slug}`}
                    className="text-reset font-weight-bold"
                  >
                    {data.title}
                  </a>
                </h2>
              </div>
              <div>
                <SplitButton
                  className="p-button-secondary p-button-sm"
                  icon="pi pi-pencil"
                  label={"Edytuj"}
                  model={actionButtons}
                  onClick={() => this.updateShowEditModal(true)}
                ></SplitButton>
              </div>
            </div>

            <div className="mb-2 text-muted">
              {data.date.toLocaleDateString("pl-PL", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>

            <div className="text-justify">{ReactHtmlParser(data.body)}</div>
          </div>
        </div>
        <DeletePostModal
          onDelete={this.deletePost(data.id)}
          onHide={this.updateShowDeleteModal(false)}
          show={this.state.showDeletePostModal}
        />
      </>
    );
  }

  render() {
    const footer = (
      <Button
        ref={(el) => (this.loadButton = el)}
        type="text"
        icon="pi pi-plus"
        label="Load"
      />
    );

    return (
      <>
        <Button
          onClick={() => this.setState({ showCreatePostModal: true })}
          className="p-button-success"
          label="Dodaj nowy artykuł"
          icon="pi pi-plus"
        />

        <CreatePostModal
          post={undefined}
          showModal={this.state.showCreatePostModal}
          onHide={() => this.setState({ showCreatePostModal: false })}
          afterUpdate={() => this.makeRequestAndUpdateState()}
        />

        <div className="datascroller-demo">
          <div className="card">
            <DataScroller
              value={this.state.entries}
              itemTemplate={this.generateBlogEntry.bind(this)}
              rows={2}
              // loader={this.loadButton}
              // footer={footer}
              header="Header"
              lazy
            />
          </div>
        </div>
      </>
    );
  }
}
