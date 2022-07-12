import React from "react";
import imageLanding from "../../assets/delicious food.png";

const Banner = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-7">
              <div className="title-landing">Delish Kitchen</div>
              <div className="input-group flex-nowrap search-landing">
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="addon-wrapping"
                  placeholder="search food"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div>
                <img src={imageLanding} className="image-landing" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 side-background"></div>
      </div>
    </>
  );
};

export default Banner;
