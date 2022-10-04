import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  //Ability to create a recipe and add it to the end of the recipes state array of objects
  const createRecipe = (recipe) => {
    setRecipes((current) => [
      ...current,
      recipe,
    ]);
  };
  
  //Ability to delete a recipe based on its index in the recipe state array
  const deleteRecipe = (indexDelete) => {
    setRecipes((current) => {
      return current.filter((recipe, i) => i !== indexDelete);
    });
  };

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  //Returing the components to be rendered and giving them the ability they need to edit/view the recipe state
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
