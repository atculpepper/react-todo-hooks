import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [toDos, updateToDos] = useState([
    {
      content: "Work on React Hooks",
      isCompleted: false,
    },
    {
      content: "complete MakeSwift code challenge",
      isCompleted: false,
    },
    {
      content: "apply for another job",
      isCompleted: false,
    },
  ]);
  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <form className="toDo-list">
        <ul>
          {toDos.map((toDo, i) => (
            <div className="todo">
              <div className="checkbox" />
              <input type="text" value={toDos.content} />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
