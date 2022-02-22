import React from "react";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="gadgets">Гаджеты и аксессуары</li>
        <li className="household">Бытовая техника</li>
        <li>Прочее</li>
      </ul>
    </div>
  );
};

export default SideBar;
