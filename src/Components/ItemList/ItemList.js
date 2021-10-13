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
                        <div key={user.id}>
                        <CardItem key={user.login} user={user} />
                        
                        </div>
                );
            })}
        </div>
    );
};
export default ItemList;


