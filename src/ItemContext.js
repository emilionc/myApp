import React, { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState([]);

  //estado del conditional rendering..
  useEffect(() => {
    const cantidadTotal = items.reduce((acc, item) => acc + item.cantidad, 0);
    console.log(items);
    setCantidadTotal(cantidadTotal);
  }, [items]);

  const addItem = (item, cantidad) => {
    const newItem = {
      ...item,
      cantidad: cantidad,
    };
    const newCart = [...items, newItem];
    setItems(newCart);
  };

  const limpiarCarrito = () => {
    setItems([]);
  };

  const removeItem = (itemId) => {
    console.log(itemId);
    setItems(items.filter((item) => item.id !== itemId));
  };
  /* function findUser(()=>{

    return user.login === 1;}, ) ;
  console.log(items.some(isUser));
*/
  return (
    <ItemsContext.Provider
      value={{ items, addItem, cantidadTotal, limpiarCarrito, removeItem }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
