import React from 'react';

function RecipeList(props) {
  const recipeItems = props.recipes.map((recipe) => {
    return (
      <li className="recipe-item" key={recipe.id}>
        <img src={recipe.image} alt="video" />
        {recipe.title}
        <p>{recipe.missedIngredientCount}</p>
      </li>
    );
  });

  return (
    <ul id="recipe-list">
      {recipeItems}
    </ul>
  );
}

export default RecipeList;
