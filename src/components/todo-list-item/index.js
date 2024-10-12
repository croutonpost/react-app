import React from "react";
import "./index.css";
export default class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
  };
  onLabelDoneClick = () => this.setState(({ done }) => { return { done: !done } });
  onMarkImportant = () => this.setState(({ important }) => { return { important: !important } });

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = ["todo-list-item"];
    if (done) {
      classNames.push("done");
    }
    if (important) {
      classNames.push("important");
    }

    return (
      <span className={classNames.join(" ")}>
        <span className="todo-list-item-label">{label}</span>

        <button
          type="button"
          className={`btn ${this.state.done ? "btn-outline-success" : "btn-outline-danger"} btn-sm float-right"`}
          onClick={this.onLabelDoneClick}
        >
          {this.state.done ? <i className="fa-solid fa-plus" /> : <i className="fa-solid fa-times" />}
        </button>

        <button
          type="button"
          className="btn btn-outline-warning btn-sm float-right"
          onClick={this.onMarkImportant}
        >
          {this.state.important ? <i className="fa-solid fa-arrow-down" /> : <i className="fa-solid fa-arrow-up" />}
        </button>
      </span>
    );
  }
}
