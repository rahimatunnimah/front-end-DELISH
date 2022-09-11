import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?name=${item}`);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <div className="input-group flex-nowrap search-landing">
          <input
            type="text"
            className="form-control"
            aria-describedby="addon-wrapping"
            placeholder="search food"
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit" className="btn btn-warning btn-search">
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchInput;
