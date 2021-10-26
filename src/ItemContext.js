import React, { createContext, useState } from "react";



    export   const ItemsContext = createContext()  

    export const ItemsProvider = ({children}) => {
        
        
        const [cart, setCart] = useState([]);
        const [items, setItems] = useState([{ id: 45454, name: 'Keyboard Dell', price: 20 },
		{ id: 45458, name: 'Mouse Dell', price: 10 },
		{ id: 45459, name: 'Samsung Monitor', price: 300 },
		{ id: 45453, name: 'MacBook Pro', price: 860 },]);
        
      
        return(
            <ItemsContext.Provider value={[items, setItems, cart, setCart]}>
            {                 }
                {children}
            </ItemsContext.Provider>
        )
    };