import React from "react";
import { Card,  Image } from 'semantic-ui-react'
import "./CardItem.css";

const CardItem = ({product}) => (
  
  <Card>
    <Image src={product.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{product.title}</Card.Header>
      <Card.Meta>
        <span className='date'>Stock: {product.stock}</span>
      </Card.Meta>
      <Card.Description>Price:
       ${ product.price}
      </Card.Description>
    </Card.Content>
    
  </Card>
)

export default CardItem