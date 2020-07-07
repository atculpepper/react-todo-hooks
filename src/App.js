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
    if (e.key === "Backspace" && toDos[i].content === "") {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && toDos.length === 1) return;
    updateToDos((toDos) =>
      toDos.slice(0, i).concat(toDos.slice(i + 1, toDos.length))
    );
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
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

  function updateToDoAtIndex(e, i) {
    const newToDos = [...toDos];
    newToDos[i].content = e.target.value;
    updateToDos(newToDos);
  }

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...toDos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    updateToDos(temporaryTodos);
  }

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <form className="toDo-list">
        <ul>
          {toDos.map((toDos, i) => (
            <div className={`todo ${toDos.isCompleted && "todo-is-completed"}`}>
              {/* <div className="checkbox" /> */}
              <div
                className={"checkbox"}
                onClick={() => toggleTodoCompleteAtIndex(i)}
              >
                {toDos.isCompleted && <span>&#x2714;</span>}
              </div>

              <input
                type="text"
                value={toDos.content}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onChange={(e) => updateToDoAtIndex(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
