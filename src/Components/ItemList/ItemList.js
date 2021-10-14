import React,  { useEffect, useState } from 'react';
import  CardItem from '../../../src/Components/CardItem/CardItem';
import './ItemList.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

 const ItemList = () => {
const [users, setUsers] = useState([]);

console.log(users);

useEffect(() => {
		axios('https://api.github.com/users').then((json) =>
			setUsers(json.data)
		);
	}, []);

    return (
        <div className='ItemList'>
            {users.map((user)=>{
                return(
                        <Link to={`/detail/${user.id}`} >
                        <CardItem key={user.login} user={user} />
                        </Link>
                        
                );
            })}
        </div>
    );
};
export default ItemList;


