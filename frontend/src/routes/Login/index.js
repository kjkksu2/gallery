import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Login = () => {
  useEffect(() => {
    const form = document.querySelector(".needs-validation");

    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    });
  }, []);

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <form className="form py-4 px-5 rounded-3 needs-validation" noValidate>
        <h3 className="display-4 text-center fw-bold mb-5">Login</h3>
        <div className="mb-4">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Email"
            required
          />
          <div className="invalid-feedback fw-bold">Email을 입력해주세요.</div>
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Password"
            required
          />
          <div className="invalid-feedback fw-bold">
            Password를 입력해주세요.
          </div>
        </div>
        <div className="mb-4 form-check ">
          <input
            type="checkbox"
            className="form-check-input"
            id="personal-info-checkbox"
            required
          />
          <label htmlFor="personal-info-checkbox" className="form-check-label">
            <Link to="/legal/privacy">개인정보처리방침</Link>에 동의합니다.
          </label>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary rounded-pill">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
