import React from 'react';

function RecipeDetail({ recipe }) {
  console.log('recipe', recipe);
  // const missingIngredients = recipe.missedIngredients.map((missingIngredient) => {
  //   return (
  //     <p>{missingIngredient}</p>
  //   );
  // });

  const missingIngredients = 'none';

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div id="recipe-detail" className="fixed-element">
      <img src={recipe.image} alt="" />
      <div className="details">
        <div>{recipe.title}</div>
        <div>Missing Ingredients: {missingIngredients}</div>
      </div>
    </div>
  );
}

export default RecipeDetail;
