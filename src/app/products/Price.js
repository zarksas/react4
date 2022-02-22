import React from "react";

const Price = (props) => {
  return (
    <div className="price">
      <span>{props.price}</span>
      <strike>{props.oldprice}</strike>
    </div>
  );
};

export default Price;
