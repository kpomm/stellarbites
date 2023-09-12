/* eslint-disable max-len */
import React from 'react';

// this makes it easier for us to display the recipe items without polluting the recipelist function
function RecipeListItem(props) {
  const imgUrl = props.recipe.image;

  return (
    <li className="recipe-item" key={props.recipe.id} onClick={() => props.onRecipeSelect(props.recipe)}>
      <div className="recipe-picture">
        <img src={imgUrl} alt="video" />
      </div>
      <div className="recipe-label">
        <div className="recipe-text-wrapper">
          <h2>{props.recipe.title}</h2>
          <div className="flex-row">
            <div className="stat-item">
              {props.recipe.usedIngredientCount}
            </div>
            <div className="stat-item">
              {props.recipe.missedIngredientCount}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default RecipeListItem;
