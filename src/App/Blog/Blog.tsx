import React from "react";
import { PostEntry } from "./Post";
import { IPost } from "./interfaces";
import { BASE_API_URL, BLOG_URL } from "../utils/settings";
import { CreatePostModal } from "./modals";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";

interface State {
  entries: IPost[];
  showCreatePostModal: boolean;
}

export class Blog extends React.Component {
  state: State = {
    entries: [],
    showCreatePostModal: false,
  };

  makeRequestAndUpdateState(): void {
    fetch(`${BASE_API_URL}${BLOG_URL}`)
      .then((response) => response.json())
      .then((data) => this.setState({ entries: data }));
  }

  componentDidMount(): void {
    this.makeRequestAndUpdateState();
  }

  render() {
    return (
      <>
        <Button
          variant="success"
          onClick={() => this.setState({ showCreatePostModal: true })}
          className="my-3"
        >
          <FontAwesomeIcon icon="plus" /> Dodaj wpis
        </Button>

        <CreatePostModal
          post={undefined}
          showModal={this.state.showCreatePostModal}
          onHide={() => this.setState({ showCreatePostModal: false })}
          afterUpdate={() => this.makeRequestAndUpdateState()}
        />

        {this.state.entries.map((post, index) => (
          <PostEntry
            key={uuidv4()}
            data={post}
            onDelete={() =>
              setTimeout(() => {
                this.setState(this.state.entries.splice(index, 1));
              }, 4000)
            }
          />
        ))}
      </>
    );
  }
}
