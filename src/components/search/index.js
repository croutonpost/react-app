import React from "react";
import "./index.css";

export default class SearchPanel extends React.Component {
  render() {
    return (
      <input
        type="text"
        className={"form-control search-input"}
        placeholder={"type to search"}
      />
    );
  }
}