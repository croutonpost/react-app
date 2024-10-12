import React from "react";
import "./index.css";

export default class ItemStatusFilter extends React.Component {
  render() {
    return (
      <div className={"btn-group"}>
        <button type={"button"} className={"btn btn-info"}>
          All list
        </button>
        <button type={"button"} className={"btn btn-outline-secondary"}>
          Active list
        </button>
        <button type={"button"} className={"btn btn-outline-secondary"}>
          Done
        </button>
      </div>
    );
  }
}
