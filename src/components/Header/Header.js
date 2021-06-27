import React from "react";
import { Link, useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import MoviesNavigation from "../MoviesNavigation/MoviesNavigation";

import logo from "../../images/logo/logo.svg";

function Header(props) {
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  return (
    <header className={`header ${isMainPage ? "" : "header_theme_light"}`}>
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <img className="header__logo" src={logo} alt="логотип"></img>
        </Link>
        {props.loggedIn ? <MoviesNavigation /> : <Navigation />}
      </div>
    </header>
  );
}

export default Header;
