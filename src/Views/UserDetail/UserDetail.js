import React, {useState, useEffect} from 'react'
import axios from 'axios';
const UserDetail = ({ match }) => {

    let itemID = match.params.id;
    const [user, setUser] = useState([]);

    useEffect(()=>{
    axios(`https://api.github.com/users/${itemID}`).then((res) =>
    setUser(res.data)
);
},[itemID]);
    return (
        <div>
            <div className='CharacterDetail' style={{ padding: 40 }}>
			<h1>User  Detail</h1>
			{console.log(user)}
			<h2>Nombre: {user.login}</h2>
			<h2>Biografia: {user.url}</h2>
			<h2>Avatar: {user.avatar_url}</h2>

		</div>
        </div>
    )
}

export default UserDetail
