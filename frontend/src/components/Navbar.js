import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="navbar navbar-expand-lg sticky-top bg-dark"
      data-bs-theme="dark"
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          Gallery
        </Link>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu List */}
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                end
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
