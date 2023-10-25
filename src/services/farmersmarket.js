/* eslint-disable quotes */
import axios from 'axios';

// const API_KEY = '5842s5gsyn2mjv6ioemrs00wp';
const APP_TOKEN = '6wVvJSs1kVtH2rk3pdVdQfOER';

const getMarkets = async () => {
  const params = {
    $limit: 5,
    $$app_token: APP_TOKEN,
    // $api_key: API_KEY,
    $select: 'market_name',
    // $where: "city = 'New York City'",
    $where: "county = 'New York'", // Set the county condition
  };
  const url = 'https://data.ny.gov/resource/xjya-f8ng.json';

  try {
    const response = await axios.get(url, { params });

    console.log(`Retrieved ${response.data.length} records from the dataset!`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(`farmers market api error: ${error}`);
    throw error;
  }
};

export default getMarkets;
