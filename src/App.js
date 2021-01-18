import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import Button from "@material-ui/core/Button";

const API_KEY = "c09257c4afbb1a60d8777a8a25988ad8";
const API_ID = "e7a705d7";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  
  useEffect(() => {
    const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipe(data.hits);
  };
    getRecipe();
  }, [query]);

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    setQuery(search);
  };
  return (
    <div>
      <h1 className="recipe__search">Recipe Search</h1>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <Button
          className="header__searchIcon"
          variant="contained"
          color="primary"
          disabled={!search}
          onClick={getSearch}
          type="submit"
        >
          Search
        </Button>
      </div>
      <div className="__container">
        <div className="recipe__container">
          {recipe.length > 0 ? (
            recipe.map((recipe) => (
              <Recipe
                key={recipe.recipe.calories}
                title={recipe.recipe.label}
                calorie={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            ))
          ) : (
            <div className="error__message">
              The recipe you're looking is not on the database. Check the
              spelling and try again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
