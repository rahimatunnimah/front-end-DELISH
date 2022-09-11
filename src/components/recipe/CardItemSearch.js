import React from "react";
import { Link } from "react-router-dom";

function CardItemSearch({ item }) {
  return (
    <div className="col-md-4 mt-3 text-center">
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
}

export default CardItemSearch;
