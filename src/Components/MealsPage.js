import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import "./NavBar.css";
import Logo from "./NutriChef.png";
import MealsImg from "./MealsImg.svg";
import Country from "./Country.svg";

const MealsPage = () => {
  const { id } = useParams();
  const [mealData, setMealData] = useState([]);

  useEffect(() => {
    const fetchMealData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = response.data;
        console.log(response);
        setMealData(data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    };

    fetchMealData();
  }, [id]);

  let mealName = mealData.strMeal;
  let mealArea = mealData.strArea;
  let mealCategory = mealData.strCategory;
  let mealInstructions = mealData.strInstructions;
  let mealYoutube = mealData?.strYoutube
    ? `https://www.youtube.com/embed/${mealData.strYoutube.slice(-11)}`
    : "";

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top" id="edit__nav">
          <div className="container-fluid ">
            <NavLink className="navbar-brand" id="change__link" to="/">
              <img src={Logo} style={{ width: "60px" }} alt="" />
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
                  <Link
                    className="nav-link"
                    id="change__link"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="change__link" to="#">
                    Food
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </nav>
      </header>
      <body>
        <div className="container">
          <div className="row py-5 ">
            <div className="col-lg-4 col-sm-12">
              <img
                className=""
                src={mealData ? mealData.strMealThumb : "Loading..."}
                alt="#"
                id="img__info__bg"
              />
            </div>
            <div className="col-lg-8 col-sm-12 p-5">
              <h1 className="p-2 d-flex align-items-center">
                Meal Name: {mealName}{" "}
                <img
                  src={MealsImg}
                  style={{ width: "40px" }}
                  className="ps-2"
                  alt=""
                />
              </h1>
              <h2 className="p-2">
                Country: {mealArea}{" "}
                <img src={Country} style={{ width: "40px" }} alt="" />
              </h2>
              <h3 className="p-2">Category: {mealCategory}</h3>
            </div>
          </div>
          <hr style={{ border: "1.6px solid" }} />
          <div className="row pb-5">
            <h4 className="pb-5">Instructions:</h4>
            <div className="text-wrap">{mealInstructions}</div>
          </div>
          <hr style={{ border: "1.6px solid" }} />

          <div className="row pb-5">
            <h4 className="pb-5">Watch Instructions Video Now :</h4>
            <iframe
              height={600}
              src={mealYoutube}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className="pb-5"
            />
          </div>
        </div>
      </body>
    </>
  );
};

export default MealsPage;
