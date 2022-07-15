import React, { useEffect } from "react";
import "./Profile.css";
import imageUserComment from "../../assets/profile.png";
import imageRecipe from "../../assets/Rectangle 1.png";
import { Tab, Tabs } from "react-bootstrap";

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
          <img
            className="img-user-profile"
            src={imageUserComment}
            alt="Avatar"
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-12 mt-3 profile text-center">
          <h5>Rahimatun Ni'mah</h5>
        </div>
      </div>
      <Tabs
        defaultActiveKey="myRecipe"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="myRecipe" title="My Recipe">
          <div className="row mx-5">
            <div className="col-md-3 text-center">
              <div className="card card-my-recipe">
                <img
                  crossOrigin="anonymous"
                  src={imageRecipe}
                  className="card-img-top img-my-recipe"
                  alt="..."
                />
                <h5 className="card-title name-card-recent">title 1</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="card card-my-recipe">
                <img
                  crossOrigin="anonymous"
                  src={imageRecipe}
                  className="card-img-top img-my-recipe"
                  alt="..."
                />
                <h5 className="card-title name-card-recent">title 1</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="card card-my-recipe">
                <img
                  crossOrigin="anonymous"
                  src={imageRecipe}
                  className="card-img-top img-my-recipe"
                  alt="..."
                />
                <h5 className="card-title name-card-recent">title 3</h5>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="savedRecipe" title="Saved Recipe">
          <div className="row mx-5">
            <div className="col-md-3 text-center">
              <div className="card card-my-recipe">
                <img
                  crossOrigin="anonymous"
                  src={imageRecipe}
                  className="card-img-top img-my-recipe"
                  alt="..."
                />
                <h5 className="card-title name-card-recent">title 1</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="card card-my-recipe">
                <img
                  crossOrigin="anonymous"
                  src={imageRecipe}
                  className="card-img-top img-my-recipe"
                  alt="..."
                />
                <h5 className="card-title name-card-recent">title 1</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="card card-my-recipe">
                <img
                  crossOrigin="anonymous"
                  src={imageRecipe}
                  className="card-img-top img-my-recipe"
                  alt="..."
                />
                <h5 className="card-title name-card-recent">title 3</h5>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="likedRecipe" title="Liked Recipe">
          <div className="row mx-5">
            <div className="col-md-3 text-center">
              <div className="card card-my-recipe">
                <img
                  crossOrigin="anonymous"
                  src={imageRecipe}
                  className="card-img-top img-my-recipe"
                  alt="..."
                />
                <h5 className="card-title name-card-recent">title 1</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="card card-my-recipe">
                <img
                  crossOrigin="anonymous"
                  src={imageRecipe}
                  className="card-img-top img-my-recipe"
                  alt="..."
                />
                <h5 className="card-title name-card-recent">title 1</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="card card-my-recipe">
                <img
                  crossOrigin="anonymous"
                  src={imageRecipe}
                  className="card-img-top img-my-recipe"
                  alt="..."
                />
                <h5 className="card-title name-card-recent">title 3</h5>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

export default Profile;
