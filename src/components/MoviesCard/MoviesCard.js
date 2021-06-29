import React from "react";
import { useLocation } from "react-router-dom";

import saveOff from "../../images/movieCard/saveOff.png";
import saveOn from "../../images/movieCard/saveOn.png";
import remove from "../../images/movieCard/remove.png";

import * as utils from "../../utils/utils";

function MoviesCard({ movie, onMovieClick }) {
  const location = useLocation();

  const isMoviesPage = location.pathname === "/movies";
  const isSavedMoviesPage = location.pathname === "/saved-movies";

  const saveMovie = <img src={saveOn} alt="Сохранить фильм в избранное" />;
  const savedMovie = <img src={saveOff} alt="Фильм сохранен в избранном" />;
  const deleteMovie = <img src={remove} alt="Удалить фильм из избранного" />;

  function handleMovieClick() {
    onMovieClick(movie);
  }

  return (
    <li className="card">
      <div className="card__container">
        <a
          className="card__image-link"
          target="_blank"
          rel="noreferrer"
          href={movie.trailer || movie.trailerLink}
        >
          <img className="card__image" src={utils.getMovieImage(movie)} alt={movie.nameRU}></img>
        </a>
        <div className="card__caption-container">
          <h3 className="card__title">{movie.nameRU}</h3>
          <button
            className="card__button"
            onClick={handleMovieClick}>
            {isMoviesPage && !movie.isSaved && saveMovie}
            {isMoviesPage && movie.isSaved && savedMovie}
            {isSavedMoviesPage && deleteMovie}
          </button>
        </div>
        <p className="card__duration">{utils.getMovieDuration(movie)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
