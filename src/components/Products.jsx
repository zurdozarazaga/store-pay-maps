import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
// import '../styles/components/Products.css';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = product => () => {
    addToCart(product)
  }

  return (
    <div className="mt-2 justify-center">
      <div className=" gap-1.5 gap-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;