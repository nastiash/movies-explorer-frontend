import React from "react";

import Switch from "../Switch/Switch";

function FilterCheckBox({ isOn, handleToggle }) {
  return (
    <div className="check-box">
      <Switch isOn={isOn} handleToggle={handleToggle} />
      <span className="check-box__title">Короткометражки</span>
    </div>
  );
}

export default FilterCheckBox;
