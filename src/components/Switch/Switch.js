import React from "react";

function Switch({ isOn, handleToggle }) {
  return (
    <>
      <input
        className="switch"
        checked={isOn}
        onChange={handleToggle}
        id="switch"
        type="checkbox"
      />
      <label
        className={`switch__label ${!isOn ? "switch__label_enabled" : ""}`}
        htmlFor="switch"
      >
        <span className="switch__button" />
      </label>
    </>
  );
}

export default Switch;