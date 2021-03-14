import React, { useContext } from 'react';
import context from '../../context/context';
import CardsCharacter from '../CardsCharacter';
import CardsLocation from '../CardsLocation';

export default function index() {
  const { data, isFetching, inputSelected } = useContext(context);
  const { results } = data;
  console.log(data);

  return (
    <main>
      <div className="box-of-cards">
        {isFetching && <div>Loading</div>}
        {inputSelected === 'character' && results.map((character) => {
          const { id, name, image } = character;
          return <CardsCharacter key={ id } id={ id } name={ name } image={ image } />;
        })}
        {inputSelected === 'location' && results.map((location) => {
          const { id, name, type } = location;
          return <CardsLocation key={ id } id={ id } name={ name } type={ type } />;
        })}
        {inputSelected === 'episode' && results.map((episode) => {
          const { id, name, type } = episode;
          return <CardsLocation key={ id } id={ id } name={ name } type={ type } />;
        })}
      </div>
    </main>
  );
}
