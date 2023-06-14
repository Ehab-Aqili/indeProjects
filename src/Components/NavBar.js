import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Cards from "./Cards";
import "./NavBar.css";
import Logo from "./NutriChef.png"

const NavBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top" id="edit__nav">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" id="change__link" to="/">
            <img src={Logo} style={{width: '60px', }}  alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active"  to="/NavBar">
                  Food
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={inputValue}
                onChange={handleInput}
              />
            </form>
          </div>
        </div>
      </nav>
      <Cards inputValue={inputValue} />
    </header>
  );
};

export default NavBar;
