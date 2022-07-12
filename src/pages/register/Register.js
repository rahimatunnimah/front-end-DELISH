import React from "react";
import "./Register.css";
import axios from "axios";
import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.REACT_APP_URL + `auth/register`, {
        username,
        email,
        password,
        phone,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  };
  return (
    <>
      <div className="page-register">
        <div className="content">
          <div className="content-center">
            <h5 className="regis-title">Let's Get Started!</h5>
          </div>
          <div className="content-center">
            <p className="regis-description">
              Create new account to access all features
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <form className="form-register">
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label form-label-register"
                  >
                    Username
                  </label>
                  <input
                    type="username"
                    className="form-control"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label form-label-register-email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="examplexxx@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label form-label-register-phone"
                  >
                    Phone Number
                  </label>
                  <input
                    type="phoneNumber"
                    className="form-control"
                    placeholder="phone number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label form-label-register"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-warning btn-login"
                  onClick={handleRegister}
                >
                  Register Account
                </button>
              </form>
            </div>
          </div>
          <div className="content-center">
            <div>
              <p className="text-bottom">
                Already have account?{" "}
                <Link to="/login" className="link-login">
                  Login in Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
