import React from "react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import profile from "../../images/moviesNavigation/profile.png";

const classNames = require("classnames");

function MoviesNavigation() {
  const location = useLocation();

  const [isBurger, setIsBurger] = React.useState(false);

  const isMainPage = location.pathname === "/";

  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  React.useEffect(() => {
    if (window.innerWidth <= 1000) {
      setIsBurger(true);
    }
  }, []);

  return (
    <nav className="movies-nav">
      <button
        className="movies-nav__menu-button"
        type="button"
        onClick={toggleMenu}
      ></button>
      <div
        className={`movies-nav__wrapper ${
          showMenu ? "movies-nav__wrapper_visible" : ""
        }`}
      >
        <div
          className={`movies-nav__container ${
            showMenu ? "movies-nav__container_visible" : ""
          }`}
        >
          <div
            className={`movies-nav__bar ${
              showMenu ? "movies-nav__bar_visible" : ""
            }`}
          >
            <div className="movies-nav__list-container">
              <button
                className="movies-nav__close-button"
                type="button"
                onClick={toggleMenu}
              ></button>
              <ul className="movies-nav__link-list">
                <li className="movies-nav__list-item">
                  <Link
                    to="/"
                    className="movies-nav__link movies-nav__link_type_main"
                  >
                    Главная
                  </Link>
                </li>
                <li className="movies-nav__list-item">
                  <NavLink
                    to="/movies"
                    className={classNames({
                      "movies-nav__link": !isMainPage,
                      "movies-nav__link movies-nav__link_theme_light":
                        isMainPage,
                      "movies-nav__link movies-nav__link_place_burger":
                        isBurger,
                    })}
                    activeClassName="movies-nav__link_active"
                  >
                    Фильмы
                  </NavLink>
                </li>
                <li className="movies-nav__list-item">
                  <NavLink
                    to="/saved-movies"
                    className={classNames({
                      "movies-nav__link": !isMainPage,
                      "movies-nav__link movies-nav__link_theme_light":
                        isMainPage,
                      "movies-nav__link movies-nav__link_place_burger":
                        isBurger,
                    })}
                    activeClassName="movies-nav__link_active"
                  >
                    Сохранённые фильмы
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link
              to="/profile"
              className="movies-nav__link movies-nav__link_type_profile"
            >
              <img
                className="movies-nav__link-icon"
                src={profile}
                alt="иконка профиля"
              ></img>
              Аккаунт
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MoviesNavigation;
