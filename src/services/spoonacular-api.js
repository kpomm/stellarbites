import axios from 'axios';

// eslint-disable-next-line no-unused-vars
const API_KEY = 'ac455474e9cf4173af963ec696ed2504';
const API_URL = 'https://api.spoonacular.com/recipes/findByIngredients';

const recipeSearch = async (term) => {
  const params = {
    ingredients: term,
    apiKey: API_KEY,
  };

  try {
    const response = await axios.get(API_URL, { params });
    return response;
  } catch (error) {
    console.log(`spoonacular api error: ${error}`);
    throw error;
  }
};

export default recipeSearch;
