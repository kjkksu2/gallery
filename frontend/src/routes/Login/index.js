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
    <main className="login py-7">
      <section className="container d-flex justify-content-center align-items-center">
        <form className="form py-4 px-5 rounded-3 needs-validation" noValidate>
          {/* Local Login */}
          <div className="local-login">
            <h3 className="display-4 text-center fw-bold mb-5">Login</h3>
            <div className="mb-4">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Email"
                required
              />
              <div className="invalid-feedback fw-bold">
                Email을 입력해주세요.
              </div>
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
              <label
                htmlFor="personal-info-checkbox"
                className="form-check-label"
              >
                <Link to="/legal/privacy">개인정보처리방침</Link>에 동의합니다.
              </label>
            </div>
            <div className="mb-4 d-grid">
              <button type="submit" className="btn btn-primary rounded-pill">
                Login
              </button>
            </div>
            <div className="local-login-options mb-4 d-flex justify-content-around">
              <Link to="/users/find-password">비밀번호 찾기</Link>
              <Link to="/users/signup">회원가입</Link>
            </div>
          </div>

          {/* SNS Login */}
          <div className="sns-login">
            <hr className="sns-login-line" />
            <Link
              to="/users/google"
              className="sns-login-google btn w-100 d-flex align-items-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="30px"
                height="30px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              <span>Continue with Google</span>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
