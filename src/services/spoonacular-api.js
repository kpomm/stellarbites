import axios from 'axios';

// eslint-disable-next-line no-unused-vars
const API_KEY = 'ac455474e9cf4173af963ec696ed2504';
const API_URL = 'https://api.spoonacular.com/recipes/';

export const complexSearch = async (term, season) => {
  const params = {
    query: `${term} ${season}`,
    apiKey: API_KEY,
  };

  const complexUrl = `${API_URL}complexSearch`;

  try {
    const response = await axios.get(complexUrl, { params });
    return response;
  } catch (error) {
    console.log(`spoonacular api error: ${error}`);
    throw error;
  }
};

export const ingredientSearch = async (term) => {
  const params = {
    ingredients: term,
    apiKey: API_KEY,
  };

  const ingUrl = `${API_URL}findByIngredients`;

  try {
    const response = await axios.get(ingUrl, { params });
    console.log(response);
    return response;
  } catch (error) {
    console.log(`spoonacular api error: ${error}`);
    throw error;
  }
};

export const getRecipe = async (term) => {
  const id = term;

  const params = {
    apiKey: API_KEY,
  };

  const recipeUrl = `https://api.spoonacular.com/recipes/${id}/information`;

  try {
    const response = await axios.get(recipeUrl, { params });
    return response;
  } catch (error) {
    console.log(`recipe error: ${error}`);
    throw error;
  }
};
