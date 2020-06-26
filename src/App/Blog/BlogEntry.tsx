import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import { IBlogEntry } from "./IBlogEntry";
import { IBlogState } from "./IBlogState";
import { BlogEditModal } from "./BlogEditModal";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

class BlogEntry extends React.Component<IBlogEntry, IBlogState> {
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
      openShowMore: false,
    };
  }

  updateState(blogEntry: IBlogEntry): void {
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
            href={`./${this.state.slug}`}
            className="text-reset font-weight-bold"
          >
            {this.state.title}
          </a>
        </h2>

        <div className="mb-2 text-muted">{this.state.date}</div>

        <div className="text-justify">{ReactHtmlParser(this.state.body)}</div>

        {this.state.extraBody.length > 0 && (
          <>
            <Button
              onClick={() => this.setState({ openShowMore: true })}
              aria-controls="example-collapse-text"
              aria-expanded={this.state.openShowMore}
              size="lg"
              variant="secondary"
              hidden={this.state.openShowMore}
              block
            >
              Czytaj więcej
            </Button>

            <Collapse in={this.state.openShowMore}>
              <div className="text-justify" id="example-collapse-text">
                {ReactHtmlParser(this.state.extraBody)}
              </div>
            </Collapse>
          </>
        )}
        <BlogEditModal
          data={this.state}
          showModal={this.state.showEditModal}
          hideModal={() => this.setState({ showEditModal: false })}
          afterUpdate={(blogEntry) => this.updateState(blogEntry)}
        />
      </div>
    );
  }
}

export { BlogEntry };
