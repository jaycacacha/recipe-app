import React from "react";
import "./Recipe.css";

function Recipe({ title, calorie, image, ingredients }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="img" className="image__" />
      <p>Calories: {Math.floor(calorie)}</p>
      <ul className="ingredients__list">
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
