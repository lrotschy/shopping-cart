import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './components/Shop';
import registerServiceWorker from './registerServiceWorker';

// Shop {}
  // Header
    // Cart
      // Items?
  // ProductsList
    // Product Wrapper {editing: true/false}
      // Product
      // EditProductForm
      // Buttons

    // ** Product {editing: true/false}
      // EditProductForm
      // conditionally render buttons?

  // AddProductForm


ReactDOM.render(<Shop />, document.getElementById('root'));
registerServiceWorker();
