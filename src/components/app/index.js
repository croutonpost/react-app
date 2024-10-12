import React from "react";

import Header from "../header";
import Search from "../search";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./index.css";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "React Application", important: true, id: 2 },
    { label: "Make notes from your stud", important: false, id: 3 },
    { label: "Do not drink alchohol", important: false, id: 4 },
  ];

  return (
    <div className="todo-app">
      <Header toDo={1} done={3} />
      <div className="top-panel d-flex">
        <Search />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

export default App;