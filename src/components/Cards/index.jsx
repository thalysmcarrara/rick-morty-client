import React, { useContext } from 'react';
import context from '../../context/context';

export default function index() {
  const { data, isFetching } = useContext(context);
  const { results } = data;
  console.log(data);
  return (
    <main>
      <div className="box-of-cards">
        {isFetching ? <div>Loading</div> : results.map((item) => {
          const { id, name, image } = item;
          return (
            <section className="card" key={ id }>
              <div className="img-container">
                <img src={ image } alt={ `character ${name}` } />
              </div>
              <p>{name}</p>
              <div className="more-information-button">
                <button type="button">More</button>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
