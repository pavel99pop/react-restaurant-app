import React, { useState, useCallback, useContext } from "react";
import "./HomePage.scss";
import { myContext } from "../";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { fetchHomePageDishes, dishes } = useContext(myContext);

  const fetchDishesHandler = useCallback(() => {
    fetchHomePageDishes(searchTerm);
  }, [searchTerm, fetchHomePageDishes]);

  return (
    <div className="home">
      <div className="home-search">
        <input
          type="text"
          placeholder="Type a dish name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={fetchDishesHandler}>Search</button>
      </div>
      <div className="home-dishes">
        {dishes ? (
          dishes.map((dish) => (
            <div className="home-dishes-grid" key={dish.idMeal}>
              <img src={dish.strMealThumb} alt="#" />
              <h4>{dish.strMeal}</h4>
            </div>
          ))
        ) : (
          <h2>No dish found by that name! Try something else...</h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
