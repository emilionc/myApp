import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios';
import './UserDetail.css';
import ItemCount from '../../Components/ItemCount/ItemCount';

import { ItemsContext } from '../../ItemContext';

const UserDetail = ({ match }) => {

    let itemID = match.params.id;
    const [user, setUser] = useState([]);
    const [compra, setCompra] = useState([]);
    
    useEffect(()=>{
    axios(`https://api.github.com/users/${itemID}`).then((res) =>
    setUser(res.data)
);
},[itemID]);
const onAdd = (cantidad)=>{
setCompra(cantidad)
}
const [items, setItems] = useContext(ItemsContext);
    console.log(items)
    return (
        <div>
            <div className='CharacterDetail' style={{ padding: 40 }}>
			<h1>User  Detail</h1>
			{console.log(user)}
			<h2>Nombre: {user.login}</h2>
			<h2>id: {user.node_id}</h2>
			<h2>Avatar: {user.avatar_url}</h2>
            
          
               <ItemCount nombre={user.id} valorInicial="1"  stock="30"   onClick={ (cant) => onAdd(cant)} />

           


            
		</div>
        </div>
    )
}

export default UserDetail
