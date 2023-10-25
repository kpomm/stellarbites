/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MagnifyingGlass } from '@phosphor-icons/react';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  // add this above your return
  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  // want to have a search change on enter or key press
  const onButtonPress = () => {
    props.onSearchChange(searchTerm);
  };
  const onEnterPress = (event) => {
    if (event.key === 'Enter') {
      props.onSearchChange(searchTerm);
    }
  };

  // in return (which is our render):
  return (
    <div id="search-bar">
      <div id="nested-search-bar">
        <input onChange={onInputChange} value={searchTerm} onKeyDown={onEnterPress} placeholder="type your ingredients, separated by commas" />
        <button onClick={onButtonPress} type="submit"><MagnifyingGlass size={20} /></button>
      </div>
    </div>
  );
}

export default SearchBar;
