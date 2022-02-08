import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className=" bg-white no-underline ">
      <div className=" w-full ">
        <div className='block w-full '>
          <div className='  max-h-52 md:max-h-48 object-contain overflow-hidden mb-10 rounded-lg'>
            <img src={product.image} alt={product.title} className='w-full ' />
          </div>
          <div>
            <div className="p-2.5">
              <h2 className=' justify-between flex font-bold text-lg'>
                {product.title}
                <span className='text-price text-xl' >
                  $
                  {' '}
                  {product.price}
                </span>
              </h2>
              <p className='font-light text-sm'>{product.description}</p>
            </div>
            <button className='bg-gradient-to-r from-header-init to-header-end hover:bg-navigation-end cursor-pointer font-light rounded-md text-sm outline-none w-full p-2.5 ' type="button" onClick={handleAddToCart(product)}>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
