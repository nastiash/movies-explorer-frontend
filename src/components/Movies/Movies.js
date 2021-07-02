import React from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies(
  { movies, isLoading, onMovieClick, searchError, handleMoreButton, handleToggleSwitch, handleSearchSubmit, isSwitchOn, currentMovies, allMovies },
  loggedIn
) {

  const handleSubmit = (value) => {
    handleSearchSubmit(value);
  };

  return (
    <>
      <Header theme={"light"} component={Movies} loggedIn={loggedIn} />
      <section className="movies">
        <SearchForm
          onSubmit={handleSubmit}
          isOn={isSwitchOn}
          handleToggle={handleToggleSwitch}
        />
        {isLoading && <Preloader />}
        <MoviesCardList
          movies={currentMovies}
          onMoreButton={handleMoreButton}
          moreButton={currentMovies.length < allMovies.length}
          isSavedMoviesPage={false}
          onMovieClick={onMovieClick}
          searchError={searchError}
        />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
