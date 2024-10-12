import React from "react";
import "./index.css";

export default class AppHeader extends React.Component {
  render() {
    return (
      <div className={"app-header d-flex"}>
        <h1>Todo List</h1>
        <h2>
          {this.props.toDo} more to do, {this.props.done}
        </h2>
      </div>
    );
  }
}
