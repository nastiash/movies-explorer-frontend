import React from 'react';

import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
    <Header
      theme={"light"}
      component={Movies}
      loggedIn={true}
    />
      <section className="movies">
        <SearchForm />
        <MoviesCardList
          moreButton={true}
        />
      </section>
    <Footer />
    </>
  )
}

export default Movies;