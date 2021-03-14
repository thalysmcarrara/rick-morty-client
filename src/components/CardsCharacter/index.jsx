import React from 'react';

export default function index(props) {
  const { name, image, id } = props;
  return (
    <section className="card">
      <div className="img-container">
        <img src={ image } alt={ `character ${name}` } />
      </div>
      <p>{name}</p>
      <div className="more-information-button">
        <button value={ id } type="button">More</button>
      </div>
    </section>
  );
}
