import React, { Component } from "react";

import Header from "../header";
import Search from "../search";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter";

import "./index.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ],
    term: "",
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((item) => item.id !== id), // Using filter for cleaner code
    }));
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => ({
      todoData: [...todoData, newItem], // No need to mutate, just spread the array
    }));
  };

  toggleProperty = (id, propName) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((item) =>
        item.id === id ? { ...item, [propName]: !item[propName] } : item
      ), // Using map for immutable state update
    }));
  };

  onToggleDone = (id) => {
    this.toggleProperty(id, "done");
  };

  onToggleImportant = (id) => {
    this.toggleProperty(id, "important");
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter(
      (item) => item.label.toLowerCase().includes(term.toLowerCase()) // More concise comparison
    );
  }

  render() {
    const { todoData, term } = this.state;
    const visibleItems = this.search(todoData, term);
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <Header toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <Search onSearchChange={this.onSearchChange} />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
