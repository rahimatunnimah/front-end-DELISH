import React, { useEffect, useState } from "react";
import "./AddRecipe.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddRecipe() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [recipeImage, setRecipeImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("ingredients", ingredients);
    formData.append("recipe_image", recipeImage);

    axios
      .post(`${process.env.REACT_APP_URL}recipes/add`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "content-type": "multipart/form-data",
        },
      })
      .then(() => {
        console.log("Berhasil diupload");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  console.log(recipeImage);
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-12 mt-5 form-add ">
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-input"
              id="exampleFormControlInput1"
              placeholder="Title"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="file"
              className="form-control form-input"
              id="exampleFormControlInput1"
              onChange={(e) => {
                setRecipeImage(e.target.files[0]);
              }}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control form-input-ingredients"
              id="exampleFormControlTextarea1"
              placeholder="Ingredients"
              rows={3}
              defaultValue={""}
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-warning button-comment mt-3"
              onClick={handleSubmit}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddRecipe;
