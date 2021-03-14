import React from 'react';

export default function index(props) {
  const { handleInput, inputSelected } = props;
  return (
    <label className="radio-button" htmlFor="episodes-option">
      <input
        type="radio"
        name="search-option"
        id="episodes-option"
        value="episode"
        checked={ inputSelected === 'episode' }
        onClick={ (event) => handleInput(event.target) }
      />
      <div className="my-radio-button" />
      Episodes
    </label>
  );
}
