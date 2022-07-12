import React, { useEffect } from "react";
import "./AddRecipe.css";

function AddRecipe() {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-12 mt-5 form-add ">
          <div className="mb-3">
            <input
              type="email"
              className="form-control form-input"
              id="exampleFormControlInput1"
              placeholder="Title"
            />
          </div>
          <div className="mb-3">
            <input
              type="file"
              className="form-control form-input"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control form-input-ingredients"
              id="exampleFormControlTextarea1"
              placeholder="Ingredients"
              rows={3}
              defaultValue={""}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-warning button-comment mt-3"
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
