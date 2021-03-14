import React from 'react';

export default function index(props) {
  const { handleInput, inputSelected } = props;
  return (
    <label htmlFor="locations-option">
      <input
        type="radio"
        name="search-option"
        id="locations-option"
        value="location"
        checked={ inputSelected === 'location' }
        onClick={ (event) => handleInput(event.target) }
      />
      Locations
    </label>
  );
}
