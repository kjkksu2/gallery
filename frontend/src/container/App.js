import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.scss";
import Root from "../routes/Root";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Privacy from "../routes/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/legal/privacy", element: <Privacy /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
