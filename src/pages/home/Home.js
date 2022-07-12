import React from "react";
// Css for all components in screen Home
import "./Home.css";

// import components
import Landing from "../../components/landing/Landing";
import NewRecipe from "../../components/recipe/NewRecipe";
import RecentRecipe from "../../components/recipe/RecentRecipe";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [recentRecipe, setRecentRecipe] = useState([]);
  const [newRecipe, setNewRecipe] = useState([]);

  useEffect(() => {
    getRecentRecipe();
    getNewRecipe();
  }, []);

  const getRecentRecipe = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}recipes/latest/recipe`
      );
      const { result } = response.data;
      setRecentRecipe(result);
    } catch (error) {
      console.log(error, "error recent recipe");
    }
  };

  const getNewRecipe = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}recipes/latest/recipe`
      );
      const { result } = response.data;
      setNewRecipe(result);
    } catch (error) {
      console.log(error, "error new recipe");
    }
  };
  return (
    <>
      <Landing />
      <NewRecipe data={newRecipe} />
      <RecentRecipe data={recentRecipe} />
    </>
  );
}

export default Home;
