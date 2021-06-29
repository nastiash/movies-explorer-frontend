import React from "react";
import FilterCheckBox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSubmit, isOn, handleToggle }) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!value) {
      setError("Нужно ввести ключевое слово");
    } else {
      setError("");
      onSubmit(value.trim());
    }
  }

  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={handleSubmit}
      >
        <div className="search__container">
          <input
            className="search__input"
            placeholder="Фильм"
            type="text"
            minLength="3"
            value={value}
            onChange={handleChange}>
          </input>
          <button className="search__button" type="submit">
            Поиск
          </button>
        </div>
        <FilterCheckBox
          isOn={isOn}
          handleToggle={handleToggle}
          />
      </form>
    </section>
  );
}

export default SearchForm;
