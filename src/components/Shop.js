import React, { Component } from "react";
import Header from "./Header";
import ProductsList from "./ProductsList";
import ProductFormWrapper from "./ProductFormWrapper";
import client from '../lib/client';

class Shop extends Component {
  state = {
    products: [],
    adding: false,
  };

  componentDidMount() {
    client.get('/api/products')
      .then((products) => {
        this.setState({
          products,
        });
      });
  };

  updateProducts({ id, ...product }) {
    client.put(`/api/products/${id}`, product)
      .then((product) => {
        this.setState((prevState) => {
          const newProducts = prevState.products.map((p) => {
            if (p.id === id) {
              return product;
            }

            return p;
          });

          return {
            products: newProducts,
          };
        });
      });
  };

  addProduct = ({ id, ...product }) => {
    client.post(`/api/products`, product)
      .then((product) => {
        this.setState((prevState) => {
          const newProducts = [...prevState.products, product];

          return {
            products: newProducts,
          };
        });
      });
  };

  deleteProduct = (id) => {
    client.delete(`/api/products/${id}`)
      .then(() => {
        this.setState((prevState) => {
          const newProducts = prevState.products.filter((product) => (
             product.id !== id
          ));

          return {
            products: newProducts,
          };
        });
      });
  };

  handleAddClick = (product) => {
    this.addProduct(product);

    this.setState({
      adding: false,
    });
  };

  handleUpdateClick = (product) => {
    this.updateProducts(product);
  };

  handleAddAProductClick = (e) => {
    e.preventDefault();

    this.setState({
      adding: true,
    });
  };

  handleCancelClick = (e) => {
    e.preventDefault();

    this.setState({
      adding: false,
    });
  };

  handleDeleteClick = (id) => {
    this.deleteProduct(id);
  };

  render() {
    return (
      <div id="app">
        <Header />
        <main>
          <ProductsList
            products={this.state.products}
            onUpdateClick={this.handleUpdateClick}
            onDeleteClick={this.handleDeleteClick}
          />
          {this.state.adding ?
            <ProductFormWrapper
              onUpdateClick={this.handleAddClick}
              onCancelClick={this.handleCancelClick}
            />
            :
            <p>
              <a
                className="button add-product-button"
                onClick={this.handleAddAProductClick}
              >
                Add A Product
              </a>
            </p>
          }
        </main>
      </div>
    );
  }
}

export default Shop;
