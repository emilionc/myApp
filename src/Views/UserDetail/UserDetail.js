import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetail = ({match}) => {
    //console.log('MATCH', match);
    let userDit = match.params.id
    const [user, setUser] = useState([]);
    
    
    useEffect(()=>{
        axios(`https://api.github.com/users/${userDit}`).then(res => 
        setUser(res.data))
    }, []);
    
    return (
        <div>
            
        </div>
    )
}

export default UserDetail
