import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItemSearch from "../components/recipe/CardItemSearch";

function Search() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let keyword = params.get("name");
  const [listSearch, setListSearch] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}recipes/search/name?name=${keyword}`)
      .then((res) => {
        setListSearch(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <h3 className="mt-4">Search Result</h3>
          <div className="row">
            {listSearch?.map((item, index) => (
              <div key={index} className="col-md-4 mt-3 text-center">
                <CardItemSearch item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
