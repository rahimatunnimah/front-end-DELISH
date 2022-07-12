import React, { useState, useEffect } from "react";
import "./DetailRecipe.css";

import Comment from "../../components/comment/commentRecipe";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailRecipe = () => {
  const [detailRecipe, setDetailRecipe] = useState({});

  useEffect(() => {
    getDetailRecipe();
  });

  const idRecipe = useParams();

  const getDetailRecipe = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}recipes/${idRecipe.id}`
      );
      const data = response.data.data[0];
      setDetailRecipe(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-12">
          <h1 className="title-detail-recipe text-center m-5">
            {detailRecipe?.name}
          </h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12 text-center">
          <img
            crossOrigin="anonymous"
            src={`http://localhost:8001/${detailRecipe?.recipe_image?.substring(
              7,
              detailRecipe?.recipe_image?.length
            )}`}
            className="img-fluid image-detail rounded"
            alt="..."
          />
        </div>
      </div>
      <div className="row container mt-5">
        <div className="col-md-6 offset-md-2">
          <h2>Ingredients</h2>
          <div className="row">
            <p>{detailRecipe?.ingredients}</p>
          </div>
        </div>
        <Comment />
      </div>
    </>
  );
};

export default DetailRecipe;
