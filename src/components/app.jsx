/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
// api stuff
import { ingredientSearch, complexSearch, getRecipe } from '../services/spoonacular-api';
import getMarkets from '../services/farmersmarket';
// import components
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import TopBar from './TopBar';
import RecipeDetail from './RecipeDetail';
import SeasonDropdown from './SeasonDropdown';

function App(props) {
  const [recipes, setRecipes] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selectedRecipe, setSelected] = useState();
  const [markets, setMarkets] = useState();

  const [selectedSeason, setSelectedSeason] = useState();

  useEffect(() => {
    console.log('Selected season: ', selectedSeason);
  }, [selectedSeason]);

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
  };

  const search = (text) => {
    if (selectedSeason === 'Winter' || selectedSeason === 'Spring' || selectedSeason === 'Fall' || selectedSeason === 'Summer') {
      console.log('complex search');
      complexSearch(text, selectedSeason).then((result) => {
        console.log('complex search', result.data);
        setRecipes(result.data.results);
        // Nested here to wait for above line
        console.log('id', result.data.results[0].id);
        return getRecipe(result.data.results[0].id);
      }).then((recipe) => {
        setSelected(recipe.data);
      });
    } else if (selectedSeason === 'None') {
      console.log('ingredient search');
      ingredientSearch(text).then((result) => {
        console.log('ingredient search', result.data);
        setRecipes(result.data);
        return getRecipe(result.data[0].id);
      }).then((recipe) => {
        setSelected(recipe.data);
      });
    }
  };

  const setRecipe = (recipe) => {
    getRecipe(recipe.id).then((result) => {
      setSelected(result.data);
    });
  };

  // import to be used in your App component

  // create a new debounced search function
  const debouncedSearch = useCallback(
    debounce(search, 500),
    [selectedSeason],
  );

  console.log(selectedRecipe);

  useEffect(() => {
    console.log('getting farmers market data');
    const mkts = getMarkets();
    setMarkets(mkts);
    console.log('ingredient search');
    console.log(selectedSeason);
    ingredientSearch('chicken').then((result) => {
      console.log('ingredient search', result.data);
      setRecipes(result.data);
      return getRecipe(result.data[0].id);
    }).then((recipe) => {
      setSelected(recipe.data);
    });
  }, []);

  return (
    <div>
      <TopBar />
      <SearchBar onSearchChange={debouncedSearch} />
      <SeasonDropdown selected={selectedSeason}
        onChange={handleSeasonSelect}
      />
      <div id="landing-container">
        <RecipeDetail recipe={selectedRecipe} marketsPromise={markets} />
        <RecipeList onRecipeSelect={(selection) => setRecipe(selection)} recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
