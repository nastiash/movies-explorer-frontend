import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import * as utils from "../../utils/utils";

import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchError, setSearchError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [isTooltipOpen, setToolTipOpen] = React.useState(false);

  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;

  const handleLogin = (email, password) => {
    mainApi
      .authorize(email, password)
      .then((res) => {
        localStorage.setItem("token", res.message);
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        setToolTipOpen(true);
        setMessage(utils.getErrors(err));
        console.log(err);
      });
  };

  function handleRegister(name, email, password) {
    //console.log(name, email, password);
    mainApi
      .register(name, email, password)
      .then((res) => {
        if (res.email) {
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        setToolTipOpen(true);
        setMessage(utils.getErrors(err));
        console.log(err);
      });
  }

  function handleUpdateProfile({ name, email }) {
    mainApi
      .updateProfile({ name, email })
      .then((data) => {
        if (data) {
          setCurrentUser(data);
        }
      })
      .catch((err) => {
        setToolTipOpen(true);
        setMessage(utils.getErrors(err));
        console.log(utils.getErrors(err));
      });
  }

  function closeToolTip() {
    setToolTipOpen(false);
  }

  function handlerEscClose(event) {
    if (event.key === "Escape") {
      closeToolTip();
    }
  }

  function closeByOverlay(event) {
    if (event.target.classList.contains("tooltip")) {
      closeToolTip();
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", handlerEscClose);
    document.addEventListener("click", closeByOverlay);
    return () => {
      document.removeEventListener("keydown", handlerEscClose);
      document.removeEventListener("click", closeByOverlay);
    };
  });

  function handleSignOut(event) {
    event.preventDefault();
    closeToolTip();
    setLoggedIn(false);
    setCurrentUser({});
    setSavedMovies([]);
    localStorage.clear();
    history.push("/");
  }

  function handleSaveMovie(movie) {
    mainApi
      .addMovie(movie)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(utils.getErrors(err));
      });
  }

  function handleDeleteMovie(movie) {
    const movieId = movie.id || movie.movieId;
    const userMovie = savedMovies.find(
      (savedMovie) => savedMovie.movieId === movieId
    );
    mainApi
      .deleteMovie(userMovie._id)
      .then(() => {
        const newSavedMovies = savedMovies.filter(
          (savedMovie) => savedMovie.movieId !== movieId
        );
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        console.log(utils.getErrors(err));
      });
  }

  function handleMovieClick(movie) {
    if (!movie.isSaved && !movie._id) {
      handleSaveMovie(movie);
    } else {
      handleDeleteMovie(movie);
    }
  }

  function getMoviesInfo() {
    setSearchError("");
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((movies) => {
        localStorage.setItem("all-movies", JSON.stringify(movies));
        setMovies(utils.checkSavedMovies(movies, savedMovies));
        setSearchError("Фильмы не найдены");
      })
      .catch((err) => {
        setSearchError(utils.getErrors(err));
        console.log(utils.getErrors(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push(path);
          }
        })
        .catch((err) => {
          console.log(utils.getErrors(err));
        });
    } else {
      localStorage.removeItem("token");
    }
  }, [history, path]);

  React.useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem("token");
      Promise.all([mainApi.getUserInfo(token), mainApi.getSavedMovies(token)])
        .then(([userData, movies]) => {
          setCurrentUser(userData);
          setSavedMovies(movies);
          localStorage.setItem("saved-movies", JSON.stringify(movies));
          localStorage.setItem("current-user", JSON.stringify(userData));
        })
        .catch((err) => console.log(utils.getErrors(err)));
    }
  }, [loggedIn]);

  React.useEffect(() => {
    const allMovies = JSON.parse(localStorage.getItem("all-movies"));
    if (allMovies) {
      console.log(allMovies);
      setMovies(utils.checkSavedMovies(allMovies, savedMovies));
      setSearchError("Фильмы не найдены");
    } else {
      setSearchError(
        "Начните поиск - введите название фильма в строку поиска!"
      );
      setMovies([]);
    }
  }, [savedMovies]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            redirect="/"
            movies={movies}
            onGetMovies={getMoviesInfo}
            onMovieClick={handleMovieClick}
            isLoading={isLoading}
            searchError={searchError}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            redirect="/"
            savedMovies={savedMovies}
            onMovieClick={handleMovieClick}
            isLoading={isLoading}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            redirect="/"
            onSignOut={handleSignOut}
            onUpdate={handleUpdateProfile}
            isTooltipOpen={isTooltipOpen}
            message={message}
          />
          <Route path="/signup">
            <Register
              onRegister={handleRegister}
              isTooltipOpen={isTooltipOpen}
              message={message}
            />
          </Route>
          <Route path="/signin">
            <Login
              onLogin={handleLogin}
              isTooltipOpen={isTooltipOpen}
              message={message}
            />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
