import React from "react";

const Button = (props) => {
  return (
    <div className="button">
      <button type="button">{props.button}</button>
    </div>
  );
};

export default Button;
