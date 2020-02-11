import React, { Component } from 'react';

class ProductForm extends Component {
  state = {
    title: this.props.title || '',
    price: this.props.price || '',
    quantity: this.props.quantity || '',
  };

  handleUpdateClick = (e) => {
    e.preventDefault();

    const { onUpdateClick, id } = this.props;
    const product = { id, ...this.state };

    onUpdateClick(product);
  };

  handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { title, price, quantity } = this.state;
    const { id, onCancelClick } = this.props;

    return (
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            name="title"
            onChange={this.handleChange}
            value={title}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            name="price"
            onChange={this.handleChange}
            value={price}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            name="quantity"
            onChange={this.handleChange}
            value={quantity}
          />
        </div>

        <div className="actions form-actions">
          <a
            className="button"
            onClick={this.handleUpdateClick}
          >
            {id ? 'Update' : 'Add'}
          </a>
          <a
            className="button"
            onClick={onCancelClick}
          >
            Cancel
          </a>
        </div>
      </form>
    );
  };
}

export default ProductForm;
