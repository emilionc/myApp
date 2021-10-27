import React, { useContext } from "react";
import { ItemsContext } from "../../ItemContext";

const Carrito = () => {
    
  const [items, setItems] = useContext(ItemsContext);

  return (
    <div>
      <h1>carroooo hay: {items.length} productos</h1>
    </div>
  );
};

export default Carrito;
