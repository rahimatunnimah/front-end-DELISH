import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddComment = (props) => {
  const [comment, setComment] = useState("");
  const { auth } = useSelector((state) => state);
  const { user } = auth;
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const idRecipe = props?.data?.id;

  const config = {
    headers: {
      Authorization: `Bearer ${auth?.token}`,
    },
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const body = {
      comment,
      recipe_id: idRecipe,
      user_id: user.id,
    };
    axios
      .post(`${process.env.REACT_APP_URL}comment/add`, body, config)
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: "Add comment recipe successfully",
        }).then((res) => (res.isConfirmed ? navigate(`/`) : null));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="col-md-9 offset-md-2">
        <div className="row">
          <form onSubmit={handleAddComment}>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
                defaultValue={""}
                onChange={(e) => setComment(e.target.value)}
              />
              <label htmlFor="floatingTextarea2">Comments</label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-warning button-comment mt-3"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "SEND"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddComment;
