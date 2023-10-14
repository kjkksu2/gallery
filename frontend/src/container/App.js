import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.scss";
import Root from "../routes/Root";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Privacy from "../routes/Privacy";
import FindPassword from "../routes/FindPassword";
import Signup from "../routes/Signup";
import Google from "../routes/Google";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/users/login", element: <Login /> },
      { path: "/users/find-password", element: <FindPassword /> },
      { path: "/users/signup", element: <Signup /> },
      { path: "/users/google", element: <Google /> },
      { path: "/legal/privacy", element: <Privacy /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
