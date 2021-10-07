import React,  { useEffect, useState } from 'react';
import  CardItem from '../../../src/Components/CardItem/CardItem';




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
                    
                        <CardItem key={user.login}  />
                    
                );
            })}
        </div>
    );
};
export default ItemList;


