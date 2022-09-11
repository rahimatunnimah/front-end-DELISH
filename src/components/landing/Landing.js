import React from "react";
import imageLanding from "../../assets/delicious food.png";
import SearchInput from "./SearchInput";

const Banner = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-7">
              <div className="title-landing">Delish Kitchen</div>
              <SearchInput />
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
