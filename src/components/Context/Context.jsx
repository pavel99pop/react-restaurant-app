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

  const fetchCategories = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        console.log(res.data.categories);
        setCategories(res.data.categories);
      });
  }, []);

  const fetchRandomDish = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        console.log(res.data.meals);
        setRandomDish(res.data.meals);
      });
  }, []);

  return (
    <myContext.Provider
      value={{
        fetchHomePageDishes,
        dishes,
        fetchCategories,
        categories,
        fetchRandomDish,
        randomDish,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
