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
      <div className="columns">
        <div className="col-2">
          <div>
            <h5 id="recipe-title">{recipe.title}</h5>
            { recipe.dishTypes && (<div id="dish-types">{dishTypes}</div>)}
          </div>
          <img src={recipe.image} alt="" />
        </div>
        <div className="col-2">
          <div>
            <div>
              <h4>Ready in {recipe.readyInMinutes} minutes
              </h4>
            </div>
            <div>
              <h4>Servings: {recipe.servings}
              </h4>
            </div>
            <div>
              <h4>Source: {' '}
                <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">{recipe.sourceName}</a>
              </h4>
            </div>
          </div>
          {markets && (<div><h3>Shop Local!</h3><div className="markets">{displayMarkets}</div></div>)}

        </div>

      </div>
    </div>

  );
}

export default RecipeDetail;
