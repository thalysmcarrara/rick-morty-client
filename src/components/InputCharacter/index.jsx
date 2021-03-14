import React from 'react';

export default function index(props) {
  const { handleInput, inputSelected } = props;
  return (
    <label htmlFor="characters-option">
      <input
        type="radio"
        name="search-option"
        id="characters-option"
        value="character"
        checked={ inputSelected === 'character' }
        onClick={ (event) => handleInput(event.target) }
      />
      Characters
    </label>
  );
}
