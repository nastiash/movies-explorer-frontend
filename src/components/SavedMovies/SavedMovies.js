import React from "react";
//import { useState, useEffect } from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies() {
  return (
    <>
      <Header loggedIn={true} />
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList moreButton={false} />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
