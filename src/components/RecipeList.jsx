import React from 'react';
// importing components
import RecipeListItem from './RecipeListItem';

function RecipeList(props) {
  const recipeItems = props.recipes.map((recipe) => {
    return (
      <RecipeListItem className="recipe-item" key={recipe.id} recipe={recipe} onRecipeSelect={props.onRecipeSelect} />
    );
  });

  return (
    <ul id="recipe-list">
      {recipeItems}
    </ul>
  );
}

export default RecipeList;
