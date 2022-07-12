import React from "react";

const commentRecipe = () => {
  return (
    <>
      <div className="col-md-9 offset-md-2">
        <div className="row">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              defaultValue={""}
            />
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-warning button-comment mt-3"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default commentRecipe;
