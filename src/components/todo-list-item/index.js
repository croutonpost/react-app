import React from "react";
import "./index.css";
export default class TodoListItem extends React.Component {
  state = { done: undefined };
  onLabelDoneClick = () => this.setState({ done: true });
  onLabelUndoneClick = () => this.setState({ done: false });

  render() {
    const { label, important = false } = this.props;
    const style = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal",
    };

    const { done } = this.state;

    let classNames = ["todo-list-item"];
    if (done) {
      classNames.push("done");
    }

    return (
      <span className={classNames.join(" ")}>
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
