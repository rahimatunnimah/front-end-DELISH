import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//import components
import LeftSide from "../components/auth/LeftSide";
import TitleForm from "../components/auth/TitleForm";
import FormLogin from "../components/auth/FormLogin";

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/");
  }, []);

  return (
    <div className="overflow">
      <div className="row">
        <div className="col-md-6">
          <LeftSide />
        </div>
        <div className="col-md-6">
          <div className="right-side d-flex flex-column justify-content-center align-items-center">
            <TitleForm title="Welcome" sub="Log in into your exiting account" />
            <FormLogin />
            <p className="mt-3">
              Don't have an account?{" "}
              <Link to="/register" className="link-auth">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
