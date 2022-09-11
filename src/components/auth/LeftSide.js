import React from "react";
import Logo from "../../assets/logo-recipe.png";

function LeftSide() {
  return (
    <>
      <div className="left-side ">
        <div className="logo text-center">
          <img src={Logo} alt="logo" />
          <h2 className="text-center mt-2">Delish Kitchen</h2>
        </div>
      </div>
    </>
  );
}

export default LeftSide;
