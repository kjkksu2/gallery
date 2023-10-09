import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Background from "../components/Background";

const Root = () => {
  return (
    <>
      <Navbar />
      <main className="vh-100 position-relative text-white py-7">
        <Background />
        <Outlet />
      </main>
    </>
  );
};

export default Root;
