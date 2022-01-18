import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title}></img>
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span> ${product.price}</span>
          <p>{product.description}</p>
        </h2>
      </div>
      <button type="button">Comprar</button>
    </div>
  );
};

export default Product;
