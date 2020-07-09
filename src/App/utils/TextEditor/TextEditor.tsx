import React from "react";
import ReactQuill from "react-quill";
import { ITextEditorProps } from "./interfaces";

export class TextEditor extends React.Component<ITextEditorProps> {
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

  render() {
    return (
      <ReactQuill
        theme="snow"
        value={this.props.value}
        onChange={this.props.onChange}
        modules={this.modules}
        formats={this.formats}
      />
    );
  }
}
