import React from "react";

import classes from "./App.module.css";

const App = () => {
  console.log(process.env.NODE_ENV);
  return (
    <nav className="navbar" style={{ backgroundColor: "#e3f2fd" }}>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Disabled</a>
        </li>
      </ul>
    </nav>
  );
};

export default App;
