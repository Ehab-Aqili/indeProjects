import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./NutriChef.png";
import SliderOne from "./SliderOne.jpg";
import SliderTwo from "./SliderTwo.jpg";
import SliderThree from "./SliderThree.png";
import ImgCards from "./CardsForHomeOne1.jpg";
import ImgCardsTwo from "./CardsForHomeThree..jpg";
import ImgCardsThree from "./CardsForHomeTwo.jpg";

const Home = () => {
  const cardStyle = {
    width: "20rem",
  };
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
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/NavBar">
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
                />
              </form>
            </div>
          </div>
        </nav>
      </header>
      <body id="bg__page">
        <div style={{ paddingTop: "60px" }}>
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1000">
                <img
                  src={SliderOne}
                  className="d-block w-100"
                  alt="#"
                  style={{ height: "500px" }}
                />
              </div>
              <div className="carousel-item active" data-bs-interval="1000">
                <img
                  src={SliderTwo}
                  className="d-block w-100"
                  alt="#"
                  style={{ height: "500px" }}
                />
              </div>
              <div className="carousel-item active">
                <img
                  src={SliderThree}
                  className="d-block w-100"
                  alt="#"
                  style={{ height: "500px" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="Container p-5 d-flex justify-content-center ">
          <div>
            <h3 className="d-flex justify-content-center ">
              Our Special Instructions
            </h3>

            {/* First Cards */}
            <div className="d-flex gap-5">
              <main>
                <body id="bg__page">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 mt-5">
                        <div className="card" id="bg__cards" style={cardStyle}>
                          <img
                            src={ImgCards}
                            className="card-img-top"
                            alt="#"
                            style={{ width: "286.4", height: "286.4" }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">Beef Sunday Roast</h5>
                            <p className="card-text">Special Of Beef</p>
                            <Link
                              to="/NavBar"
                              className="btn btn-primary"
                              id="bg__btn"
                            >
                              More Info
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </body>
              </main>
              {/* Second Cards */}
              <main>
                <body id="bg__page">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 mt-5">
                        <div className="card" id="bg__cards" style={cardStyle}>
                          <img
                            src={ImgCardsThree}
                            className="card-img-top"
                            alt="#"
                            style={{ width: "286.4", height: "286.4" }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              Bread and Butter Pudding
                            </h5>
                            <p className="card-text">Special Of Dessert</p>
                            <Link
                              to="/NavBar"
                              className="btn btn-primary"
                              id="bg__btn"
                            >
                              More Info
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </body>
              </main>
              {/* There'd Cards */}
              <main>
                <body id="bg__page">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 mt-5">
                        <div className="card" id="bg__cards" style={cardStyle}>
                          <img
                            src={ImgCardsTwo}
                            className="card-img-top"
                            alt="#"
                            style={{ width: "286.4", height: "286.4" }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">Chick-Fil-A Sandwich</h5>
                            <p className="card-text">Special Of Chicken</p>
                            <Link
                              to="/NavBar"
                              className="btn btn-primary"
                              id="bg__btn"
                            >
                              More Info
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </body>
              </main>
            </div>
          </div>
        </div>
        <div className="Container p-5 ">
          <h3 className="d-flex justify-content-center">About Us</h3>
          <p className="d-flex justify-content-center p-5">
            Welcome to NutriChif, your ultimate destination for a delightful
            culinary experience! At NutriChif, we believe that nourishing your
            body with delicious and wholesome food is key to a vibrant and
            fulfilling life. Our team of food enthusiasts and nutrition experts
            work tirelessly to bring you a wide range of delectable recipes,
            expert tips, and insightful articles to help you make informed
            choices about your health and well-being. Join us on this flavorful
            journey as we empower you to achieve optimal nutrition and discover
            the joy of eating well.
          </p>
        </div>
      </body>
    </>
  );
};

export default Home;
