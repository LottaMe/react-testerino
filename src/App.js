import "./styles.css";
import "./components/TodoList.css";

import React from "react";
import ToDoList from "./components/ToDoList";

export default function App() {
  return (
    <div id="container">
      <ToDoList />
    </div>
  );
}
