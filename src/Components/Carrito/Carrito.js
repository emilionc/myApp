import React, { useContext } from "react";
import { ItemsContext } from "../../ItemContext";

const Carrito = () => {
    
  const {cantidadTotal} = useContext(ItemsContext);

  return (
    <div>
      <h1>carroooo hay: {cantidadTotal} productos</h1>
    </div>
  );
};

export default Carrito;
