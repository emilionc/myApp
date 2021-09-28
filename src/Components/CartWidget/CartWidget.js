import React from "react";

const CartWidget = () => {
  return (
    <div>
      <h1 className="logo-container">
        <Icon disabled name="cart" />
        <ul className="nav-list"></ul>
      </h1>
    </div>
  );
};

export default CartWidget;
