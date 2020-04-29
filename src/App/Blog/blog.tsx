import React from "react";
import { BlogEntry } from "./BlogEntry";

export class Blog extends React.Component {
  render() {
    return (
      <div>
        <BlogEntry />
        <BlogEntry />
        <BlogEntry />
        <BlogEntry />
        <BlogEntry />
        <BlogEntry />
      </div>
    );
  }
}
