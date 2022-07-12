import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post(process.env.REACT_APP_URL + `auth/login`, {
        email,
        password,
      })
      .then((res) => {
        setIsError(false);

        // SET TOKEN
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("user", JSON.stringify(res?.data?.user));
        window.location.href = "/";
      })
      .catch((err) => {
        setIsError(true);
        setErrorMsg(err?.response?.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="page-login">
        <div className="content">
          {isError ? (
            <div class="alert alert-danger" role="alert">
              {errorMsg}
            </div>
          ) : null}
          <div className="content-center">
            <h5 className="login-title">WELCOME</h5>
          </div>
          <div className="content-center">
            <p className="login-description">
              Log in into your exiting account
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <form onSubmit={(e) => e.preventDefault()} className="form-login">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="examplexxx@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-warning btn-login"
                  disabled={isLoading}
                  onClick={handleLogin}
                >
                  {isLoading ? "Loading..." : "Login"}
                </button>
              </form>
              <div className="content-center">
                <div className="text-forgot">
                  <a className="link-forgot" href="...">
                    Forgot Password?
                  </a>
                </div>
                <div>
                  <p className="text-bottom">
                    Don't have an account?{" "}
                    <Link to="/register" className="link-signup">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
