import React from 'react';
import FilterCheckBox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__container">
          <input className="search__input" placeholder="Фильм"></input>
          <button className="search__button" type="submit">Поиск</button>
        </div>
        <FilterCheckBox />
      </form>
    </section>
  )
}

export default SearchForm;