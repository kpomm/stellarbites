import React, { useEffect, useState } from 'react';

function RecipeDetail({ recipe, marketsPromise }) {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const marketsData = await marketsPromise;
        setMarkets(marketsData);
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    fetchMarkets();
    console.log(markets);
  }, [marketsPromise]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  let dishTypes,
    displayMarkets;

  if (recipe.dishTypes) {
    dishTypes = recipe.dishTypes.map((type) => {
      return (
        <h4 className="dish-type">{type}</h4>
      );
    });
  }

  console.log(markets, 'detail component');

  if (markets) {
    displayMarkets = markets.map((mkt) => {
      return (
        <h4 className="farmers-market">{mkt.market_name}</h4>
      );
    });
  }

  return (
    <div id="recipe-detail" className="fixed-element">
      <div className="detail-header"><h5 id="recipe-title">{recipe.title}</h5><img src={recipe.image} alt="" /></div>
      <div id="detail-container">
        <div className="details">
          <h3>Quick Facts</h3>
          <div>
            <h4>Ready in {recipe.readyInMinutes} minutes
            </h4>
          </div>
          <div>
            <h4>Is is affordable? {recipe.cheap}
            </h4>
          </div>
          <div>
            <h4>Servings: {recipe.servings}
            </h4>
          </div>
          { recipe.dishTypes && (<div><h4>Dish Types: <div id="dish-types">{dishTypes}</div></h4></div>)}
          <div>
            <h4>Source: {' '}
              <a href={recipe.sourceUrl}>{recipe.sourceName}</a>
            </h4>
          </div>
        </div>
        <div className="details-right">
          {markets && (<div><h4>Shop Local!</h4><div className="markets">{displayMarkets}</div></div>)}
        </div>
      </div>

    </div>
  );
}

export default RecipeDetail;
