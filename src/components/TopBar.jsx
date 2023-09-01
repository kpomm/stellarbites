import React from 'react';

function TopBar() {
  return (
    <div id="top-bar">
      <div className="left-side">
        <img src="../img/stellarbitesLogo.svg" alt="" />
        <h1>StellarBites</h1>
      </div>
      <div className="right-side">
        <h1>saved</h1>
      </div>
    </div>
  );
}

export default TopBar;
