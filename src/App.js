import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <form className="toDo-list">
        <ul>
          <div className="todo">
            <div className="checkbox" />
            <input type="text" value="first item on the list" />
          </div>
        </ul>
      </form>
    </div>
  );
}

export default App;
