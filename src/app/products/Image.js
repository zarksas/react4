import React from "react";

const Image = (props) => {
  return (
    <div className="image">
      <img src={props.src} alt="no" />
    </div>
  );
};

export default Image;
