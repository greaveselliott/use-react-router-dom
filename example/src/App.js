import React from "react";
import { RouterProvider } from "use-react-router-dom";

import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log(RouterProvider);
  return (
    <RouterProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </RouterProvider>
  );
}

export default App;
