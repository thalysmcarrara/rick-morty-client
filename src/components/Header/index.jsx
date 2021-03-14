import React, { useContext } from 'react';
import context from '../../context/context';
import InputCharacter from '../InputCharacter';
import InputEpisode from '../inputEpisode';
import InputLocation from '../InputLocation';

export default function index() {
  const {
    setInputSelected,
    inputSelected,
  } = useContext(context);
  const handleInput = ({ value }) => {
    setInputSelected(value);
  };

  return (
    <header>
      <div className="inputs-container">
        <InputCharacter handleInput={ handleInput } inputSelected={ inputSelected } />
        <InputEpisode handleInput={ handleInput } inputSelected={ inputSelected } />
        <InputLocation handleInput={ handleInput } inputSelected={ inputSelected } />
      </div>
      <h1>The Rick and Morty Wiki</h1>
    </header>
  );
}
