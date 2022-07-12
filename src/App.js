import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileContext } from "./context";
// import pages
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import DetailRecipe from "./pages/detailRecipe/DetailRecipe";
import WithoutNavbar from "./components/navbar/WithoutNavbar";
import DisplayNavbar from "./components/navbar/DisplayNavbar";
import AddRecipe from "./pages/addRecipe/AddRecipe";
import Profile from "./pages/profile/Profile";

export default function App() {
  return (
    <ProfileContext.Provider
      value={
        localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user"))
          : {}
      }
    >
      <BrowserRouter>
        <Routes>
          <Route element={<WithoutNavbar />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route element={<DisplayNavbar />}>
            <Route path="/" element={<Home />} />
            <Route path="detail-recipe/:id" element={<DetailRecipe />} />
            <Route path="add-recipe" element={<AddRecipe />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProfileContext.Provider>
  );
}
