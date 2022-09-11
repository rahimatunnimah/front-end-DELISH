import React from "react";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function FormRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_URL}auth/register`, {
        username,
        email,
        phone,
        password,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Succseed",
          text: res?.data?.message,
        }).then((res) => (res.isConfirmed ? navigate("/login") : null));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: `${err?.response?.data}`,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleRegister}>
          <label className="form-label mt-3">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="form-label mt-3">Email Address*</label>
          <input
            type="email"
            className="form-control"
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label mt-3">Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="08xxxxxxxxxx"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label className="form-label mt-3">Create New Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Create New Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-grid gap-2 mt-4">
            <button
              className="btn btn-warning btn-submit"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Register Account"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormRegister;
