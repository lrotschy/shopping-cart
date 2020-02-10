import React, { Component } from "react";
import Header from "./Header";
import ProductsList from "./ProductsList";
import ProductForm from "./ProductForm";
import products from "../lib/products"

class Shop extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    this.setState({products})
  }

  render() {
    return (
      <div id="app">
        <Header />
        <main>
          <ProductsList products={this.state.products}/>
          <ProductForm />
        </main>
      </div>
    );
  }
}

export default Shop;
