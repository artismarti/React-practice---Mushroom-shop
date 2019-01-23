import React, { Component } from 'react'
import './App.css'
import NavBar from './Header'
import ProductsContainer from './ProductsContainer'
import SearchForm from './SearchForm'
import Header from './Header'
import Cart from './Cart'

class App extends Component {
  state = {
    products: [],
    searchTerm: '',
    itemsInCart: [],
    numberOfItems: 0,
    currentContainer: null,
  }

  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(products => this.setState({ products }))
  }
  searchProducts = () => {
    let allProducts = this.state.products

    return allProducts.filter(product => {
      return product.name
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase())
    })
  }

  addItemToCart = product => {
    console.log(this.state.itemsInCart)
    console.log(this.state.itemsInCart.length)
    let oldItems = this.state.itemsInCart
    this.setState({ itemsInCart: [...oldItems, product] })
  }

  getSearchTerm = e => {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  showCart = () => {
    this.setState({ currentContainer: 1 })
  }

  render() {
    return (
      <div className="App">
        <NavBar
          numberOfItems={this.state.itemsInCart.length}
          showCart={this.showCart}
        />
        <SearchForm getSearchTerm={this.getSearchTerm} />
        {!this.state.currentContainer ? (
          <ProductsContainer
            products={this.searchProducts()}
            addItemToCart={this.addItemToCart}
          />
        ) : (
          <Cart itemsInCart={this.itemsInCart} />
        )}
      </div>
    )
  }
}

export default App
