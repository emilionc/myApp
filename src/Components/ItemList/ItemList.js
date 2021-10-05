import React, { useEffect, useState } from 'react'
import { Item } from 'semantic-ui-react';


 const ItemList = () => {
const [users, setUsers] = useState([]);

console.log(users);

useEffect (()=>{
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
}, []);

    return (
        <div>
            {users.map((user)=>{
                return(
                    <div key={users.id}>
                        <Item data={user} />
                    </div>
                )
            })}
        </div>
    )
}
export default ItemList;