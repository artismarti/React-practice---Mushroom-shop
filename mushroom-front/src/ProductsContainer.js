import React from 'react'
import { Segment, Card } from 'semantic-ui-react'
import ProductCard from './ProductCard'

const ProductsContainer = ({ products, addItemToCart }) => (
  <Segment>
    <Card.Group>
      {products.map(product => (
        <ProductCard
          product={product}
          key={product.id}
          addItemToCart={addItemToCart}
        />
      ))}
    </Card.Group>
  </Segment>
)

export default ProductsContainer
