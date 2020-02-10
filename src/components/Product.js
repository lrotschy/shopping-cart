import React from 'react';
import ProductForm from './ProductForm';

const Product = ({product}) => {
  return (
    <div class="product">
      <div class="product-details">
        <h3>{product.title}</h3>
        <p class="price">${product.price}</p>
        <p class="quantity">{product.quantity} left in stock</p>
        <a class="delete-button">
          <span>X</span>
        </a>
      </div>

      <ProductForm />
    </div>
  )
}

export default Product;
