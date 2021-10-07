import React from 'react'
import './ItemListContainer.css';
import ItemList from './Components/ItemList/ItemList';




const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>
                <ItemList />
            </h1>
        </div>
    )
}

export default ItemListContainer
