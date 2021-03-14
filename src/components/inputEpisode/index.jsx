import React from 'react';

export default function index(props) {
  const { handleInput, inputSelected } = props;
  return (
    <label htmlFor="episodes-option">
      <input
        type="radio"
        name="search-option"
        id="episodes-option"
        value="episode"
        checked={ inputSelected === 'episode' }
        onClick={ (event) => handleInput(event.target) }
      />
      Episodes
    </label>
  );
}
