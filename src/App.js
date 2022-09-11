import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

// import pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import DetailRecipe from "./pages/detailRecipe/DetailRecipe";
import WithoutNavbar from "./components/navbar/WithoutNavbar";
import DisplayNavbar from "./components/navbar/DisplayNavbar";
import AddRecipe from "./pages/addRecipe/AddRecipe";
import Profile from "./pages/profile/Profile";
import Search from "./pages/Search";

export default function App() {
  return (
    <Provider store={store}>
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
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
