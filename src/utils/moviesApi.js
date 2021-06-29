import { MOVIES_URL } from "./constants";

class MoviesApi {
  constructor (options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  };

  getMovies() {
    return fetch(MOVIES_URL, {
      method: "GET",
    }).then((res) => this._getResponse(res));
  };
};

export const moviesApi = new MoviesApi({
  baseUrl: MOVIES_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});