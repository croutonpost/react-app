import React from "react";
import "./index.css";
import { Icon } from "@iconify/react";

export default class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
  };
  onMarkImportant = () => this.setState(({ important }) => { return { important: !important } });

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = ["todo-list-item"];
    if (done) classNames.push("done");
    if (important) classNames.push("important");

    return (
      <span className={classNames.join(" ")}>
        <span className="todo-list-item-label">{label}</span>

        <button
          type="button"
          className={`btn ${
            this.state.done ? "btn-outline-success" : "btn-outline-danger"
          } btn-sm float-right"`}
          onClick={onDeleted}
        >
        <Icon icon="mdi:minus" />
        
        </button>

        <button
          type="button"
          className="btn btn-outline-warning btn-sm float-right"
          onClick={this.onMarkImportant}
        >
          {this.state.important ? (
            <Icon icon="mdi:star-off" />
          ) : (
            <Icon icon="mdi:star" />
          )}
        </button>
      </span>
    );
  }
}
