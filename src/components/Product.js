import React, { Component } from 'react';
import ProductFormWrapper from './ProductFormWrapper';

class Product extends Component {
  state = {
    editing: false,
  };

  handleEditClick = (e) => {
    e.preventDefault();

    this.setState({
      editing: true,
    });
  };

  handleCancelClick = (e) => {
    e.preventDefault();

    this.setState({
      editing: false,
    });
  };

  handleUpdateClick = (product) => {
    const { onUpdateClick } = this.props;

    onUpdateClick(product);

    this.setState({
      editing: false,
    });
  };

  handleDeleteClick = (e) => {
    e.preventDefault();

    const { product, onDeleteClick } = this.props;

    onDeleteClick(product.id);
  };

  render() {
    const { editing } = this.state;
    const { product } = this.props;

    return (
      <div className="product">
        <div className="product-details">
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
          <p className="quantity">{product.quantity} left in stock</p>
          <a
            className="delete-button"
            onClick={this.handleDeleteClick}
          >
            <span>X</span>
          </a>
        </div>

        {editing ?
          <ProductFormWrapper
            product={product}
            onCancelClick={this.handleCancelClick}
            onUpdateClick={this.handleUpdateClick}
          />
          :
          <div className="actions product-actions">
            <a className="button add-to-cart">Add to Cart</a>
            <a
              className="button edit"
              onClick={this.handleEditClick}
            >
              Edit
            </a>
          </div>
        }
      </div>
    )
  };
};

export default Product;
