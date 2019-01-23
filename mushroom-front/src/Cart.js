import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

const Cart = props => (
  <Segment>
    <Header>Shopping Cart</Header>
    {props.itemsInCart.map(i => (
      <p>i.name</p>
    ))}
  </Segment>
)

export default Cart
