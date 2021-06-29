import React from "react";

function ToolTip(props) {
  return (
    <div className={`tooltip ${props.isOpen ? "tooltip_opened" : ""}`}>
      <div className="tooltip__container">
        <p className="tooltip__message">{props.message}</p>
      </div>
    </div>
  );
}

export default ToolTip;