import React from "react";
import "./index.css";

export default class SearchPanel extends React.Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search..."
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}