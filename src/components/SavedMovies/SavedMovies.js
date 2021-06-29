import React from "react";
//import { useState, useEffect } from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import * as utils from "../../utils/utils";

function SavedMovies({ savedMovies, onMovieClick }, loggedIn) {
  const [searchValue, setSearchValue] = React.useState("");
  const [isSwitchOn, setSwitchOn] = React.useState(false);
  const [movies, setMovies] = React.useState(savedMovies);

  const handleSubmit = (value) => {
    setSearchValue(value);
  };

  const handleToggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
  };

  React.useEffect(() => {
    const moviesFound = utils.searchMovie(savedMovies, searchValue);
    const moviesFiltered = utils.filterMovies(moviesFound, isSwitchOn);
    setMovies(moviesFiltered);
  }, [savedMovies, searchValue, isSwitchOn]);

  return (
    <>
      <Header loggedIn={loggedIn} />
        <section className="saved-movies">
      <SearchForm
          onSubmit={handleSubmit}
          isOn={isSwitchOn}
          handleToggle={handleToggleSwitch}
      />
      <MoviesCardList
          isSavedMoviesPage={true}
          movies={movies}
          moreButton={false}
          onMovieClick={onMovieClick}
          searchError={
            savedMovies.length < 1 ? "Нет сохраненных фильмов" : "Фильмы не найдены"
          }
      />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
