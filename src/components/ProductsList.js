import React from 'react';
import Product from './Product';

const ProductsList = ({ products, onUpdateClick, onDeleteClick }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onUpdateClick={onUpdateClick}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  )
}

export default ProductsList;
