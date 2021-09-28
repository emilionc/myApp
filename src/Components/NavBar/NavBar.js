import React from "react";
import { Icon } from "semantic-ui-react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="">
    <h1 className="logo-container">
      <Icon disabled name="cart" />
      <ul className="nav-list">
        <li className="items">productos</li>
        <li className="items">contacto</li>
        <li className="items">about</li>
        </ul>
    </h1>
  </div>
  );
};

export default NavBar;
