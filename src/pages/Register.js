import React from "react";
import { Link } from "react-router-dom";

//import components
import LeftSide from "../components/auth/LeftSide";
import TitleForm from "../components/auth/TitleForm";
import FormRegister from "../components/auth/FormRegister";

function Register() {
  return (
    <div className="overflow">
      <div className="row">
        <div className="col-md-6">
          <LeftSide />
        </div>
        <div className="col-md-6 mt-3">
          <div className="right-side d-flex flex-column justify-content-center align-items-center ">
            <TitleForm
              title="Let’s Get Started !"
              sub="Create new account to access all features"
            />
            <FormRegister />
            <p className="mt-3">
              Already have account?{" "}
              <Link to="/login" className="link-auth">
                Log in Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
