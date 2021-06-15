import React from 'react';
import { useLocation } from "react-router-dom";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const location = useLocation();

  const isSavedMoviesPage = location.pathname === "/saved-movies";

  return (
    <section className="cards">

      {isSavedMoviesPage ?
        <ul className="cards__list">
          <MoviesCard
            isSaved={true}
          />
          <MoviesCard
            isSaved={true}
          />
          <MoviesCard
            isSaved={true}
          />
        </ul> :
      <ul className="cards__list">
        <MoviesCard
          isSaved={true}
        />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard
          isSaved={true}
        />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard
          isSaved={true}
        />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      }
      <div className="cards__button-container">
        {props.moreButton && (
          <button className="cards__more-button">Ещё</button>
        )}
      </div>
    </section>
  )
}

export default MoviesCardList;