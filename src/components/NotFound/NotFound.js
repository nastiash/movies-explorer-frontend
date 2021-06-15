import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="error">
    <div className="error__container">
      <h1 className="error__title">404</h1>
      <p className="error__subtitle">Страница не найдена</p>
    <Link to="/" className="error__button-link">
      <button
        type="button"
        className="error__button"
      >
        Назад
      </button>
    </Link>
    </div>
  </div>
  )
}

export default NotFound;