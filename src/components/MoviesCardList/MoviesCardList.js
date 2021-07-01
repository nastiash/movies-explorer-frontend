import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import * as utils from "../../utils/utils";

function MoviesCardList({
  movies,
  moreButton,
  onMoreButton,
  onMovieClick,
  searchError,
}) {

  const moviesVisible = movies.length > 0;

  return (
    <section className="cards">
      {!moviesVisible && <p className="cards__message">{searchError}</p>}

      {moviesVisible && (
        <ul className="cards__list">
          {movies.map((movie) => (
            <MoviesCard
              key={utils.getMovieKey(movie)}
              movie={movie}
              onMovieClick={onMovieClick}
            />
          ))}
        </ul>
      )}
      {moreButton && (
        <div className="cards__button-container">
          {moreButton && (
            <button className="cards__more-button" onClick={onMoreButton}>
              Ещё
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
