import React, { useEffect, useState } from "react";
import "./AddRecipe.css";
import iconImageUpload from "../../assets/icon-upload-img.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function AddRecipe() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [recipeImage, setRecipeImage] = useState({});
  const [category, setCategory] = useState([]);
  const [idCategory, setIdCategory] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [titleImage, setTitleImage] = useState("Add Photo Recipe");

  const navigate = useNavigate();
  const { auth } = useSelector((state) => state);
  const { user } = auth;

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    axios
      .get(`${process.env.REACT_APP_URL}recipes/category`)
      .then((res) => {
        setCategory(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUploadImage = (e) => {
    let photoRecipe = e.target?.files[0];
    let nameImage = e.target?.files[0]?.name;
    setTitleImage(nameImage);
    setRecipeImage(photoRecipe);
  };

  const handleAddRecipe = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("ingredients", ingredients);
    formData.append("category_id", idCategory);
    formData.append("recipe_image", recipeImage);
    formData.append("user_id", user?.id);

    const config = {
      headers: {
        Authorization: `Bearer ${auth?.token}`,
        "Content-Type": "multipart/form-data; ",
      },
    };

    axios
      .post(`${process.env.REACT_APP_URL}recipes/add`, formData, config)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          text: "Add data recipe successfully",
        }).then((res) => (res.isConfirmed ? navigate("/") : null));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  console.log("id category", idCategory);
  return (
    <>
      <div className="container">
        <div className="row form-add-recipe">
          <form onSubmit={handleAddRecipe}>
            <div className="row">
              <input
                type="file"
                id="upload"
                hidden
                onChange={handleUploadImage}
              />
              <label className="label-button-upload" for="upload">
                <div className="icon-upload">
                  <img src={iconImageUpload} alt="icon-upload" />
                  <p className="mt-2 title-icon-upload">{titleImage}</p>
                </div>
              </label>
            </div>
            <div className="row mt-3">
              <input
                className="form-control form-control-lg form-input-add"
                type="text"
                placeholder="Title"
                aria-label=".form-control-lg example"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="row form-floating mt-3">
              <select
                className="form-select form-select-category"
                id="floatingSelect"
                aria-label="Floating label select example"
                onChange={(e) => setIdCategory(e.target.value)}
              >
                {category.map((item, index) => (
                  <option key={index} value={item?.id}>
                    {item?.category_name}
                  </option>
                ))}
              </select>
              <label htmlFor="floatingSelect">Category</label>
            </div>
            <div className="row mt-3">
              <div className="form-floating" style={{ padding: "0px" }}>
                <textarea
                  className="form-control form-input-add-ingredients"
                  placeholder="Ingredients"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  defaultValue={""}
                  onChange={(e) => setIngredients(e.target.value)}
                />
                <label htmlFor="floatingTextarea2">Ingredients</label>
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-warning button-add-recipe"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "POST"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddRecipe;
