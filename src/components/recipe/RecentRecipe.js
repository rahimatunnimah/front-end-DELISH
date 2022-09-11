import React from "react";
import { Link } from "react-router-dom";

const RecentRecipe = (props) => {
  return (
    <>
      <div className="row">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <div className="title-six-recent">
                <h2>Popular recipes</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center classss">
        {props?.data?.map((item) => (
          <div className="col-md-4 text-center">
            <Link to={`/detail-recipe/${item?.id}`}>
              <div className="card card-recent-recipe">
                <img
                  crossOrigin="anonymous"
                  src={item?.recipe_image}
                  className="card-img-top img-recent"
                  alt="..."
                />
                <h5 className="card-title text-start name-card-recent">
                  {item?.name}
                </h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentRecipe;
