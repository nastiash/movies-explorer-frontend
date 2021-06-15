import React from 'react';
import { useLocation } from "react-router-dom";

import movie from "../../images/movieCard/movie.jpg";
import saveOff from "../../images/movieCard/saveOff.png";
import saveOn from "../../images/movieCard/saveOn.png";
import remove from "../../images/movieCard/remove.png";


function MoviesCard(props) {
  const location = useLocation();

  const isMoviesPage = location.pathname === "/movies";
  const isSavedMoviesPage = location.pathname === "/saved-movies";

  const saveMovie = <img src={saveOn} alt="Сохранить фильм в избранное" />;
  const savedMovie = <img src={saveOff} alt="Фильм сохранен в избранном" />;
  const deleteMovie = <img src={remove} alt="Удалить фильм из избранного" />;

  return (
    <li className="card">
      <div className="card__container">
        <a className="card__image-link" target="_blank" rel="noreferrer" href="https://kinopoisk.ru/"><img className="card__image" src={movie} alt="ссылка на фильм"></img></a>
      <div className="card__caption-container">
        <h3 className="card__title">Gimme Danger: История Игги и The Stooges</h3>
        <button className="card__button">
          {isMoviesPage && !props.isSaved && saveMovie}
          {isMoviesPage && props.isSaved && savedMovie}
          {isSavedMoviesPage && deleteMovie}
        </button>
      </div>
      <p className="card__duration">1ч42м</p>
      </div>
    </li>
  )
}

export default MoviesCard;