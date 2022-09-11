import React from "react";

function CommentRecipe(props) {
  return (
    <>
      {props?.data?.map((item, index) => {
        return (
          <>
            <div key={index} className="row">
              <div className="col-md-9 offset-md-2 mt-3">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      crossOrigin="anonymous"
                      className="img-user-comment"
                      src={item.image}
                      alt="img"
                    />
                  </div>
                  <div className="col-md-6" style={{ marginLeft: "-80px" }}>
                    <p className="user-name-comment">{item.username}</p>
                    <p className="user-comment">{item.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default CommentRecipe;
