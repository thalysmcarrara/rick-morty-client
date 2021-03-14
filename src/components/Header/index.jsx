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
      <h1>The Rick and Morty Wiki</h1>
      <section className="inputs-container">
        <label htmlFor="characters-option" className="radio-button">
          <input
            type="radio"
            name="search-option"
            id="characters-option"
            value="character"
            onClick={ (event) => handleInput(event.target) }
          />
          <div className="my-radio-button" />
          Characters
        </label>
        <label htmlFor="episodes-option" className="radio-button">
          <input
            type="radio"
            name="search-option"
            id="episodes-option"
            value="episode"
            onClick={ (event) => handleInput(event.target) }
          />
          <div className="my-radio-button" />
          Episodes
        </label>
        <label htmlFor="locations-option" className="radio-button">
          <input
            type="radio"
            name="search-option"
            id="locations-option"
            value="location"
            onClick={ (event) => handleInput(event.target) }
          />
          <div className="my-radio-button" />
          Locations
        </label>
      </section>
    </header>
  );
}
