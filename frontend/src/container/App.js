import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.scss";
import Root from "../routes/Root";
import Home from "../routes/Home";
import Login from "../routes/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
