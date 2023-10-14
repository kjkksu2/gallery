import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Background from "../components/Background";

const Root = () => {
  return (
    <>
      <Background />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
