import React from "react";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/authSlice";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_URL}auth/login`, {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("user", JSON.stringify(res?.data?.user));
        dispatch(login({ token: res?.data?.token, user: res?.data?.user }));
        Swal.fire({
          icon: "success",
          text: "login successfully",
        }).then((res) => (res.isConfirmed ? navigate("/") : null));
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err?.response?.data,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <label className="form-label mb-2 mt-3">E-mail</label>
        <input
          type="email"
          className="form-control"
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form-label mb-2 mt-3">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="d-grid gap-2 mt-4">
          <button
            className="btn btn-warning btn-submit"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>
      </form>
    </>
  );
}

export default FormLogin;
