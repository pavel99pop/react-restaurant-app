import React, { useEffect, useContext } from "react";
import { myContext } from "../";
import "./RandomDish.scss";

const RandomDish = () => {
  const { fetchRandomDish, randomDish } = useContext(myContext);

  useEffect(() => {
    fetchRandomDish();
  }, [fetchRandomDish]);

  return (
    <div className="random">
      {randomDish.map((dish) => (
        <div key={dish.idMeal} className="random-grid">
          <div className="random-grid-controls">
            <h4>
              Wanna prepare something by yourself? <br />
              <span>We got you covered!</span>
            </h4>
            <img src={dish.strMealThumb} alt="Random Dish" />
            <h3>{dish.strMeal}</h3>
          </div>
          <div className="random-grid-instructions">
            <h3>Here's how you do it...</h3>
            <p>{dish.strInstructions}</p>
          </div>
          <div className="random-grid-hard">
            <h4>
              <span>A little too hard?</span> <br /> No worries!
            </h4>
            <button onClick={fetchRandomDish}>Try something else</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomDish;
