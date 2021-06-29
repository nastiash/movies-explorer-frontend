import noPhoto from "../images/movieCard/noPhoto.jpg";

export const getMovieKey = (movie) => {
  if (movie.id) return movie.id;
  if (movie.movieId) return movie.movieId;
  return "key";
};

export const getMovieImage = (movie) => {
  if (movie.image && movie.image.url)
    return `https://api.nomoreparties.co${movie.image.url}`;
  if (movie.image) return movie.image;
  return noPhoto;
};

export const getMovieDuration = (movie) => {
  return `${Math.floor(movie?.duration / 60)}ч ${movie?.duration % 60}м`;
};

export const checkSavedMovies = (movies, savedMovies) => {
  savedMovies.forEach((savedMovie) => {
    const movie = movies.find((item) => item.nameRU === savedMovie.nameRU);
    movie.isSaved = true;
  });
  return movies;
};

export const searchMovie = (movies, value) =>
  movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(value.toLowerCase());
  });

export const filterMovies = (movies, checked) => {
  return movies.filter((movie) => (checked ? movie.duration <= 40 : Number));
};

export const getMoviesCount = () => {
  switch (true) {
    case window.innerWidth >= 1280:
      return 12;
    case window.innerWidth >= 768:
      return 8;
    default:
      return 5;
  }
};

export const loadMovies = () => {
  if (window.innerWidth >= 768) {
    return 4;
  }
  return 2;
};

export const getErrors = (err) => {
  if (err === "Ошибка: 400" || err.message === "Ошибка: 400")
    return "Не верно заполнено одно из полей";
  if (err === "Ошибка: 401" || err.message === "Ошибка: 401")
    return "Неправильные почта или пароль";
  if (err === "Ошибка: 403" || err.message === "Ошибка: 403")
    return "Недостаточно прав";
  if (err === "Ошибка: 404" || err.message === "Ошибка: 404")
    return "Данные не найдены";
  if (err === "Ошибка: 409" || err.message === "Ошибка: 409")
    return "Пользователь с данным email уже существует";
  if (err === "Ошибка: 429" || err.message === "Ошибка: 429")
    return "Превышен лимит запросов. Попробуйте позже";
  return "Ошибка сервера";
};
