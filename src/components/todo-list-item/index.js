import React from "react";
import "./index.css";
import { Icon } from "@iconify/react";

export default class TodoListItem extends React.Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleDone,
      onToggleImportant,
      done,
      important,
    } = this.props;

    let classNames = ["todo-list-item"];
    if (done) classNames.push("done");
    if (important) classNames.push("important");

    return (
      <span className={classNames.join(" ")}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <div className="todo-list-item-buttons">
          <button
            type="button"
            className={`btn ${
              !done ? "btn-outline-success" : "btn-outline-danger"
            } btn-sm float-right`}
            onClick={onToggleDone}
          >
            {!done ? (
              <Icon class="icon" icon="mdi:check" />
            ) : (
              <Icon class="icon" icon="mdi:close" />
            )}
          </button>

          <button
            type="button"
            className="btn btn-outline-warning btn-sm float-right"
            onClick={onToggleImportant}
          >
            {important ? (
              <Icon class="icon" icon="mdi:star-off" />
            ) : (
              <Icon class="icon" icon="mdi:star" />
            )}
          </button>

          <button
            type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onDeleted}
          >
            <Icon class="icon" icon="mdi:minus" />
          </button>
        </div>
      </span>
    );
  }
}
