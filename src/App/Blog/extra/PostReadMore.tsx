import React from "react";
import ReactHtmlParser from "react-html-parser";
import { v4 as uuidv4 } from "uuid";

interface IPostReadMoreProps {
  text: string;
}

interface IPostReadMoreState {
  show: boolean;
}

export class PostReadMore extends React.Component<
  IPostReadMoreProps,
  IPostReadMoreState
> {
  constructor(props: Readonly<IPostReadMoreProps>) {
    super(props);

    this.state = {
      show: false,
    };
  }

  indentifier = uuidv4();

  render() {
    return (
      <>
        {/* <Button
          onClick={() => this.setState({ show: true })}
          aria-controls={this.indentifier}
          aria-expanded={this.state.show}
          hidden={this.state.show}
          size="lg"
          variant="info"
          className="my-3"
          block
        >
          Czytaj więcej{" "}
          <FontAwesomeIcon className="align-middle" icon="angle-down" />
        </Button>

        <Collapse in={this.state.show}>
          <div className="text-justify" id={this.indentifier}>
            {ReactHtmlParser(this.props.text)}
          </div>
        </Collapse> */}
      </>
    );
  }
}
