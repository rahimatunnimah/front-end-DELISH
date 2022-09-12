import React, { useState, useEffect } from "react";
import "./Profile.css";
import MyRecipe from "../../components/recipe/MyRecipe";
import axios from "axios";
import { useSelector } from "react-redux";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const { auth } = useSelector((state) => state);
  const { user } = auth;

  useEffect(() => {
    getProfile();
  }, []);

  const config = {
    headers: {
      Authorization: `Bearer ${auth?.token}`,
    },
  };

  const getProfile = () => {
    axios
      .get(`${process.env.REACT_APP_URL}users/${user?.id}`, config)
      .then((res) => {
        setProfile(res?.data?.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-12 mt-5 profile text-center">
          <img className="img-user-profile" src={profile.image} alt="Avatar" />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-12 mt-3 profile text-center">
          <h5>{profile.username}</h5>
        </div>
      </div>
      <MyRecipe />
    </>
  );
};

export default Profile;
