import React, { useEffect } from "react";
import "./Profile.css";
import imageUser from "../../assets/profile.png";
import MyRecipe from "../../components/recipe/MyRecipe";

const Profile = () => {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-12 mt-5 profile text-center">
          <img className="img-user-profile" src={imageUser} alt="Avatar" />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-12 mt-3 profile text-center">
          <h5>Rahimatun Ni'mah</h5>
        </div>
      </div>
      <MyRecipe />
    </>
  );
};

export default Profile;
