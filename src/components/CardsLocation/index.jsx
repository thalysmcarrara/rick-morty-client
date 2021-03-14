import React from 'react';

export default function index(props) {
  const { name, type, id } = props;
  return (
    <section className="card">
      <h1>{name}</h1>
      <p>{`Tipo: ${type}`}</p>
      <p className="more-information-button">
        <button value={ id } type="button">More</button>
      </p>
    </section>
  );
}
