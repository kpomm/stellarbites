/* eslint-disable max-len */
import React, { useEffect } from 'react';

// this makes it easier for us to display the recipe items without polluting the recipelist function
function RecipeListItem(props) {
  const imgUrl = props.recipe.image;
  let usedIngredients,
    unusedIngredients,
    missingIngredients;

  if (props.recipe.usedIngredientCount) {
    usedIngredients = props.recipe.usedIngredients.map((item) => {
      return (
        <p className="used-ingredient-item">{item.name}</p>
      );
    });

    unusedIngredients = props.recipe.unusedIngredients.map((item) => {
      return (
        <p className="unused-ingredient-item">{item.name}</p>
      );
    });

    missingIngredients = props.recipe.missedIngredients.map((item) => {
      return (
        <p className="missed-ingredient-item">{item.name}</p>
      );
    });

    useEffect(() => {
      usedIngredients = props.recipe.usedIngredients.map((item) => {
        return (
          <p className="used-ingredient-item">{item.name}</p>
        );
      });
      unusedIngredients = props.recipe.unusedIngredients.map((item) => {
        return (
          <p className="unused-ingredient-item">{item.name}</p>
        );
      });
      missingIngredients = props.recipe.missedIngredients.map((item) => {
        return (
          <p>{item.name}</p>
        );
      });
    }, [props.recipe]);
  }

  return (
    <li className="recipe-item" key={props.recipe.id} onClick={() => props.onRecipeSelect(props.recipe)}>
      <div className="recipe-picture">
        <img src={imgUrl} alt="video" />
      </div>
      <div className="recipe-label">
        <div className="recipe-text-wrapper">
          <h2>{props.recipe.title}</h2>
        </div>
        <div className="flex-row">
          {usedIngredients}
          {unusedIngredients}
          {missingIngredients}
        </div>
      </div>
    </li>
  );
}

export default RecipeListItem;
