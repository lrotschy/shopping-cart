import React from 'react';
import ProductForm from './ProductForm';

const ProductFormWrapper = ({ product, onCancelClick, onUpdateClick }) => (
  <div>
    <h3>{product ? 'Edit' : 'Add'} Product</h3>

    <ProductForm
      {...product}
      onCancelClick={onCancelClick}
      onUpdateClick={onUpdateClick}
    />
  </div>
);

export default ProductFormWrapper;
