import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Card } from 'semantic-ui-react';
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
			{user.map((user) => {
				return (
					<Card key={user.id}>
						<Card.Content>
							<Card.Header>{user.log}</Card.Header>
							
						</Card.Content>
					</Card>
				);
			})}
		</div>
        </div>
    )
}

export default UserDetail
