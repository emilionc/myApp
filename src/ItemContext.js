import React, { createContext, useState } from "react";



    export   const ItemsContext = createContext()  

    export const ItemsProvider = ({children}) => {
        
        
        const [cart, setCart] = useState([]);
        const [items, setItems] = useState([]);
       
        function addItem(newItem, quantity) {
            const idx = cart.findIndex((listI) => listI.item.id === newItem.id)
    
            if (idx === -1) {
                const l = [ ...cart, { item: newItem, quantity } ]
                setCart(l)
            } else {
                const newQuantity = cart[idx].quantity + quantity;
                const oldI = cart.filter((oldI) => oldI.item.id !== cart[idx].item.id)
                const l = [...oldI, { item: cart[idx].item, quantity: newQuantity }]
                setCart(l)
            }
        }
      
        return(
            <ItemsContext.Provider value={[items, setItems, cart, setCart,addItem]}>       
                {children}
            </ItemsContext.Provider>
        )
    };