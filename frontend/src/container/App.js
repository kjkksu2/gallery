import React from "react";

import classes from "./App.module.css";

const App = () => {
  return (
    <>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it
      </div>
      <h1 className={classes.hello}>Hello</h1>
    </>
  );
};

export default App;
