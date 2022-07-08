import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import DetailRecipe from "./pages/detailRecipe";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<DetailRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
