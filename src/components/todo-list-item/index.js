import React from "react";
import "./index.css";
export default class TodoListItem extends React.Component {
  onLabelDoneClick = () => console.log(`Done: ${this.props.label}`);
  onLabelUndoneClick = () => console.log(`Undone: ${this.props.label}`);

  render() {
    const { label, important = false } = this.props;
    const style = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal",
    };

    return (
      <span className="todo-list-item">
        <span className="todo-list-item-label" style={style}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onLabelDoneClick}
        >
          <i className="fa-solid fa-check" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={this.onLabelUndoneClick}
        >
          <i className="fa-solid fa-trash" />
        </button>
      </span>
    );
  }
}
