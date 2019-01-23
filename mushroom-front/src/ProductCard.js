import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const ProductCard = props => (
  <Card>
    <Card.Content>
      <Image src={props.product.image_url} size="tiny" centered />
      <Card.Header>{props.product.name}</Card.Header>
      <Card.Meta>
        <span className="date">{''}</span>
      </Card.Meta>
      <Card.Description>Quantity {props.product.quantity}</Card.Description>
      <Card.Description>{props.product.price}$</Card.Description>
      <Button onClick={() => props.addItemToCart(props.product)}>
        Add to Cart
      </Button>
    </Card.Content>
  </Card>
)

export default ProductCard
