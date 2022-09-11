import React, { useState, useEffect } from "react";
import "./DetailRecipe.css";
import AddComment from "../../components/comment/AddComment";
import CommentRecipe from "../../components/comment/CommentRecipe";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailRecipe = () => {
  const [detailRecipe, setDetailRecipe] = useState({});
  const [dataComment, setDataComment] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getDetailRecipe();
    getComment();
  }, [dataComment.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const idRecipe = useParams();
  const { id } = idRecipe;

  const getDetailRecipe = () => {
    axios
      .get(`${process.env.REACT_APP_URL}recipes/detail/${id}`)
      .then((res) => {
        setDetailRecipe(res?.data?.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getComment = () => {
    axios
      .get(`${process.env.REACT_APP_URL}comment/recipe/${id}`)
      .then((res) => {
        setDataComment(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
            src={detailRecipe?.recipe_image}
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
        <AddComment data={detailRecipe} />
        <CommentRecipe data={dataComment} />
      </div>
    </>
  );
};

export default DetailRecipe;
