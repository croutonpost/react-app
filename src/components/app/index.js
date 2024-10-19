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
    todoData: [],
    term: "",
    filter: "all", // 'all', 'active', or 'done'
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
      todoData: todoData.filter((item) => item.id !== id),
    }));
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => ({
      todoData: [...todoData, newItem],
    }));
  };

  toggleProperty = (id, propName) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((item) =>
        item.id === id ? { ...item, [propName]: !item[propName] } : item
      ),
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

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  search(items, term) {
    if (!term.length) return items;

    return items.filter((item) =>
      item.label.toLowerCase().includes(term.toLowerCase())
    );
  }

  filterItems(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "important":
        return items.filter((item) => item.important);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filterItems(this.search(todoData, term), filter);
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <Header toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex flex-column">
          <Search onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
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
