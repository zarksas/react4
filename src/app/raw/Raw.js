import React from "react";
import "./raw.css";
import SideBar from "../sidebar/SideBar";
import Products from "../products/Products";

const Raw = () => {
  return (
    <div className="raw">
      <SideBar />
      <Products />
    </div>
  );
};

export default Raw;
