import React, { useContext } from "react";
import { ItemsContext } from "../../ItemContext";

const Carrito = () => {
    
  const [items, setItems, clearState, cart, setCart] = useContext(ItemsContext);
  console.log(items, setItems);

  return (
    <div>
      <h1>carroooo hay: {items.length} productos</h1>
    </div>
  );
};

export default Carrito;
