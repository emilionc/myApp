import React from 'react';
import { Card } from 'semantic-ui-react';

const CardItem = ({user}) => (
  <Card>
    <Card.Content>
      <Card.Header>{user.login}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
     
    </Card.Content>
  </Card>
)

export default CardItem;
