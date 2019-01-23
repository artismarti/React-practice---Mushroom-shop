import React from 'react'
import { Header, Icon, Button } from 'semantic-ui-react'

const NavBar = props => {
  return (
    <Header>
      <h1>Mushroom Shop</h1>
      <Header sub>
        <Button onClick={props.showCart}>
          <Icon name="cart arrow down" size="small" />
          <div>{` ${props.numberOfItems}  `}</div>
        </Button>
      </Header>
    </Header>
  )
}

export default NavBar
