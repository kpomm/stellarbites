/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import recipeSearch from '../services/spoonacular-api';

// import components
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import TopBar from './TopBar';
import RecipeDetail from './RecipeDetail';

function App(props) {
  const [recipes, setRecipes] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selectedRecipe, setSelected] = useState();

  const search = (text) => {
    recipeSearch(text).then((result) => {
      console.log('recipes', result.data);
      setRecipes(result.data);
      setSelected(result.data[0]);
    });
  };

  // import to be used in your App component

  // create a new debounced search function
  const debouncedSearch = useCallback(debounce(search, 500), []);

  console.log(selectedRecipe);

  useEffect(() => {
    search('chicken,flour,eggs');
  }, []);

  return (
    <div>
      <TopBar />
      <SearchBar onSearchChange={debouncedSearch} />
      <div id="landing-container">
        <RecipeDetail recipe={selectedRecipe} />
        <RecipeList onRecipeSelect={(selection) => setSelected(selection)} recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
