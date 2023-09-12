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
      <div><h1>{recipe.title}</h1></div>
      <img src={recipe.image} alt="" />
      <div className="details">
        <div>Missing Ingredients: {missingIngredients}</div>
      </div>
    </div>
  );
}

export default RecipeDetail;
