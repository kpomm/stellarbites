import React from 'react';

function RecipeDetail({ recipe }) {
  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div id="recipe-detail">
      <img src={recipe.image} alt="" />
      <div className="details">
        <div>{recipe.title}</div>
      </div>
    </div>
  );
}

export default RecipeDetail;
