import React from 'react'
import Products from '../components/Products';
import initialState from '../../initialState';



function Home() {
  return (
    <div>
      <Products products={initialState.products} />
    </div>
  );
};

export default Home;