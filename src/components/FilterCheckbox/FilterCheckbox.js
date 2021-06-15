import React from 'react';

import checkboxOn from "../../images/filterCheckBox/checkbox_enable.png";
//import checkboxOff from "../../images/filterCheckBox/checkbox_disable.png";

function FilterCheckBox() {
  return (
    <div className="check-box">
      <img className="check-box__icon" src={checkboxOn} alt="фильтр фильмов"></img>
      <span className="check-box__title">Короткометражки</span>
    </div>
  )
}

export default FilterCheckBox;