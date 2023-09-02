/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BiSearchAlt } from 'react-icons/bi';

function SearchBar(props) {
  const [searchterm, setSearchTerm] = useState('');

  // add this above your return
  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  const onButtonPress = (event) => {
    props.onSearchChange(event.target.value);
  };

  // in return (which is our render):
  return (
    <div id="search-bar">
      <div id="nested-search-bar">
        <input onChange={onInputChange} value={searchterm} placeholder="type your ingredients, separated by commas" />
        <button onClick={onButtonPress} type="submit"><BiSearchAlt size="30px" color="#322E60" /></button>
      </div>
    </div>
  );
}

export default SearchBar;
