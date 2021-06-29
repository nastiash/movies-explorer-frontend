import React from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

import * as utils from "../../utils/utils";

function Movies({ movies, onGetMovies, isLoading, onMovieClick, searchError }, loggedIn) {
  const [searchValue, setSearchValue] = React.useState("");
  const [moviesCount, setMoviesCount] = React.useState(utils.getMoviesCount());
  const [allMovies, setAllMovies] = React.useState([]);
  const [currentMovies, setCurrentMovies] = React.useState([]);
  const [isSwitchOn, setSwitchOn] = React.useState(false);

  const handleSubmit = (value) => {
    setSearchValue(value);
    console.log(value);
    if(!movies.length) {
      onGetMovies();
    }
  };

  const handleMoreButton = () => {
    setMoviesCount(moviesCount + utils.loadMovies());
  };

  const handleToggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
  };

  React.useEffect(() => {
    const moviesFounded = utils.searchMovie(movies, searchValue);
    const moviesFiltered = utils.filterMovies(moviesFounded, isSwitchOn);

    setAllMovies(moviesFiltered);
    setCurrentMovies(moviesFiltered.slice(0, moviesCount));
  }, [movies, searchValue, isSwitchOn, moviesCount]);

  React.useEffect(() => {
    const handleResize= () => {
      setTimeout(() => {
        setMoviesCount(utils.getMoviesCount());
        setCurrentMovies(allMovies.slice(0, utils.getMoviesCount()));
      }, 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [allMovies]);

  return (
    <>
      <Header
        theme={"light"}
        component={Movies}
        loggedIn={loggedIn}
      />
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
