import axios from "axios";
import React, { createContext, useCallback, useState } from "react";

export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [dishes, setDishes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [randomDish, setRandomDish] = useState([]);

  const fetchHomePageDishes = useCallback((searchTerm) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => {
        console.log(res.data.meals);
        setDishes(res.data.meals);
      });
  }, []);

  return (
    <myContext.Provider value={{ fetchHomePageDishes, dishes }}>
      {children}
    </myContext.Provider>
  );
};
