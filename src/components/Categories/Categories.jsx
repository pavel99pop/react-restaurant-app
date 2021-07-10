import React, { useEffect, useContext } from "react";
import { myContext } from "../";
import "./Categories.scss";

const Categories = () => {
  const { fetchCategories, categories } = useContext(myContext);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="categories">
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.idCategory} className="category">
            <img src={category.strCategoryThumb} alt="Dish Categories" />
            <h4>{category.strCategory}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
