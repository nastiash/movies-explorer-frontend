import React from "react";
import { Link, useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import MoviesNavigation from "../MoviesNavigation/MoviesNavigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import logo from "../../images/logo/logo.svg";

function Header() {
  const location = useLocation();
  const currentUser = React.useContext(CurrentUserContext);

  const isMainPage = location.pathname === "/";

  return (
    <header className={`header ${isMainPage ? "" : "header_theme_light"}`}>
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <img className="header__logo" src={logo} alt="логотип"></img>
        </Link>
        {currentUser.email && <MoviesNavigation />}
        {!currentUser.email && <Navigation />}
      </div>
    </header>
  );
}

export default Header;
