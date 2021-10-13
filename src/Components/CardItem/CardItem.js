import React from "react";
import { Card, Button } from "semantic-ui-react";
import "./CardItem.css";
import { Link } from "react-router-dom";
 

const CardItem = ({ user }) => (
  <Card className="card">
    <Card.Content>
      <Card.Header>{user.login}</Card.Header>
      <Card.Meta>
         <Link to={`/Detail/${user.id}`}>
         <Button>Detail</Button>
         </Link>
        <span className="date">{user.id}</span>
       
      </Card.Meta>
      <Card.Description> {user.url}</Card.Description>
    </Card.Content>
    <Card.Content extra></Card.Content>
  </Card>
);

export default CardItem;
