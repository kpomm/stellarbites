import React, { useState } from 'react';

function SearchBar() {
  const [searchterm, setSearchTerm] = useState('');

  // add this above your return
  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  // in return (which is our render):
  return (
    <div id="search-bar">
      <input onChange={onInputChange} value={searchterm} placeholder="type your ingredients, separated by commas" />
    </div>
  );
}

export default SearchBar;
