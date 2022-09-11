import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MyRecipe = () => {
  const [myRecipe, setMyRecipe] = useState([]);

  const { auth } = useSelector((state) => state);
  const { user } = auth;

  useEffect(() => {
    getMyRecipe();
  }, [myRecipe]);

  const config = {
    headers: {
      Authorization: `Bearer ${auth?.token}`,
    },
  };

  const getMyRecipe = () => {
    axios
      .get(`${process.env.REACT_APP_URL}recipes/user/${user.id}`, config)
      .then((res) => {
        const dataRecipe = res?.data?.data;
        setMyRecipe(dataRecipe);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Tabs
      defaultActiveKey="myRecipe"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="myRecipe" title="My Recipe">
        <div className="row">
          {myRecipe?.map((item, index) => {
            return (
              <div key={index} className="col-md-3 mt-3 text-center">
                <Link to={`/detail-recipe/${item?.id}`}>
                  <div className="card card-my-recipe">
                    <img
                      crossOrigin="anonymous"
                      src={item.recipe_image}
                      className="card-img-top img-my-recipe"
                      alt="..."
                    />
                    <h5 className="card-title text-start name-card-recent">
                      {item.name}
                    </h5>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </Tab>
    </Tabs>
  );
};

export default MyRecipe;
