import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__buttons">
        <li className="navigation__button">
          <Link
            to="/signup"
            className="navigation__link navigation__link_type_signup"
          >
            Регистрация
          </Link>
        </li>
        <li className="navigation__button">
          <Link
            to="/signin"
            className="navigation__link navigation__link_type_signin"
          >
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;