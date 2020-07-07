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

  //function to check if enter key is pressed
  function handleKeyDown(e, i) {
    if (e.key === "Enter") {
      createToDoAtIndex(e, i);
    }
  }

  function createToDoAtIndex(e, i) {
    const newToDos = [...toDos];
    newToDos.splice(i + 1, 0, {
      content: "",
      isCompleted: false,
    });
    updateToDos(newToDos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }
  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <form className="toDo-list">
        <ul>
          {toDos.map((toDos, i) => (
            <div className="todo">
              <div className="checkbox" />
              <input
                type="text"
                value={toDos.content}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
