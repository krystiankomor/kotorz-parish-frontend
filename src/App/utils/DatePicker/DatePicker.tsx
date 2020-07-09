import React from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import { API_DATE_FORMAT } from "../settings";
import { moment } from "../Moment";
import { IDatePickerProps } from "./interfaces";

export class DatePicker extends React.Component<IDatePickerProps> {
  render() {
    return (
      <SingleDatePicker
        date={moment(this.props.date, API_DATE_FORMAT)}
        onDateChange={this.props.onDateChange}
        focused={this.props.focused}
        onFocusChange={this.props.onFocusChange}
        id="date-picker"
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
    );
  }
}
