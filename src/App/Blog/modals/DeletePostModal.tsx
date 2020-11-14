import React from "react";
import { IDeletePostModal } from "../interfaces";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

export class DeletePostModal extends React.Component<IDeletePostModal> {
  renderFooter() {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={this.props.onHide}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={this.props.onDelete}
          autoFocus
        />
      </div>
    );
  }
  render() {
    return (
      <Dialog
        header="Confirmation"
        visible={this.props.show}
        modal
        style={{ width: "350px" }}
        footer={this.renderFooter()}
        onHide={this.props.onHide}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle p-mr-3"
            style={{ fontSize: "2rem" }}
          />
          <span>Are you sure you want to proceed?</span>
        </div>
      </Dialog>
    );
  }
}
