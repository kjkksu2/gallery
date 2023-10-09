import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default root;
