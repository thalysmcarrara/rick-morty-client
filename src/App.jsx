import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div class="inputs-container">
          <label for="characters-option">
            <input
              type="radio"
              name="search-option"
              id="characters-option"
              value="characters"
            />Characters
          </label>
          <label for="episodes-option">
            <input
              type="radio"
              name="search-option"
              id="episodes-option"
              value="episodes"
            />Episodes
          </label>
          <label for="locations-option">
            <input
              type="radio"
              name="search-option"
              id="locations-option"
              value="locations"
            />Locations
          </label>
        </div>

        <div class="search-bar">
          <label for="search-input">
            <input
              type="search"
              name="searchBar"
              id="search-input"
              placeholder="Buscar algo"
            />
          </label>
          <button type="button">procurar</button>
        </div>
      </header>

      <main>
        <div class="box-of-cards">
          <section class="card">
            <div class="card-information">
              <p>Example text</p>
            </div>
          </section>

          <section class="card">
            <div class="card-information">
              <p>Example text</p>
            </div>
          </section>

          <section class="card">
            <div class="card-information">
              <p>Example text</p>
            </div>
          </section>

          <section class="card">
            <div class="card-information">
              <p>Example text</p>
            </div>
          </section>

          <section class="card">
            <div class="card-information">
              <p>Example text</p>
            </div>
          </section>

          <section class="card">
            <div class="card-information">
              <p>Example text</p>
            </div>
          </section>

          <section class="card">
            <div class="card-information">
              <p>Example text</p>
            </div>
          </section>

          <section class="card">
            <div class="card-information">
              <p>Example text</p>
            </div>
          </section>

          <section class="card">
            <div class="card-information">
              <p>Example text</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
