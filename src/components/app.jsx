/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import recipeSearch from '../services/spoonacular-api';

// import components
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import TopBar from './TopBar';

function App(props) {
  const [recipes, setRecipes] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selectedRecipe, setSelected] = useState(null);

  const search = (text) => {
    recipeSearch(text).then((result) => {
      console.log('recipes', result.data);
      setRecipes(result.data);
      setSelected(result.data[0]);
    });
  };

  useEffect(() => {
    search('apples,flour,sugar');
  }, []);

  return (
    <div>
      <TopBar />
      <SearchBar />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
