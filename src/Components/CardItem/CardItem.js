import React from "react";
import { Card, Button } from "semantic-ui-react";
import "./CardItem.css";
 

const CardItem = ({ user }) => (
  <Card className="card">
    <Card.Content>
      <Card.Header>{user.login}</Card.Header>
      <Card.Meta>
         <Button>Detail</Button>
         
        <span className="date">{user.id}</span>
       
      </Card.Meta>
      <Card.Description> {user.url}</Card.Description>
    </Card.Content>
    <Card.Content extra></Card.Content>
  </Card>
);

export default CardItem;
