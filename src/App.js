import React from "react";
// import Cards from "./Components/Cards";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import MealsPage from "./Components/MealsPage";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="NavBar/MealsPage/:id" element={<MealsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
