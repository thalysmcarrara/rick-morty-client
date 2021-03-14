import React, { useContext } from 'react';
import context from '../../context/context';

export default function index() {
  const {
    setInputSelected,
  } = useContext(context);
  const handleInput = ({ value }) => {
    setInputSelected(value);
  };

  return (
    <header>
      <div className="inputs-container">
        <label htmlFor="characters-option">
          <input
            type="radio"
            name="search-option"
            id="characters-option"
            value="character"
            onClick={ (event) => handleInput(event.target) }
          />
          Characters
        </label>
        <label htmlFor="episodes-option">
          <input
            type="radio"
            name="search-option"
            id="episodes-option"
            value="episode"
            onClick={ (event) => handleInput(event.target) }
          />
          Episodes
        </label>
        <label htmlFor="locations-option">
          <input
            type="radio"
            name="search-option"
            id="locations-option"
            value="location"
            onClick={ (event) => handleInput(event.target) }
          />
          Locations
        </label>
      </div>
      <h1>The Rick and Morty Wiki</h1>
      <button type="button">procurar</button>
    </header>
  );
}
