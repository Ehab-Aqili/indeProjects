import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const inputValueProps = props.inputValue;
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=milk")
      .then((response) => response.json())
      .then((data) => setMeals(data.meals))
      .catch((error) => console.log(error));
  }, []);

  const cardStyle = {
    width: "20rem",
  };

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(inputValueProps)
  );

  return (
    <body className="py-5">
      <main>
        <div className="container">
          <div className="row">
            {filteredMeals.map((meal) => (
              <div className="col-lg-4 col-md-6 mt-5" key={meal.idMeal}>
                <div className="card" id="bg__cards" style={cardStyle}>
                  <img
                    src={meal.strMealThumb}
                    className="card-img-top"
                    alt={meal.strMeal}
                    style={{ width: "286.4", height: "286.4" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{meal.strMeal}</h5>
                    <p className="card-text">Meal</p>
                    <Link
                      to={`MealsPage/${meal.idMeal}`}
                      className="btn btn-primary"
                      id="bg__btn"
                    >
                      More Info
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </body>
  );
};

export default Cards;
