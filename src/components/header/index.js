import React from "react";
import "./index.css";

export default class AppHeader extends React.Component {
  render() {
    return (
      <div className="app-header">
        <h1>Todo List</h1>
        <h2>
          {!this.props.toDo ? "All tasks are done!" : `${this.props.toDo} more to do, ${this.props.done} done`}
        </h2>
      </div>
    );
  }
}
