import React from "react";
import "./header.css";
import bag from "./bag.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Intocode Coding Shopcamp</div>
      <div className="img">
        <img src={bag} alt="no" />
      </div>
    </div>
  );
};

export default Header;
