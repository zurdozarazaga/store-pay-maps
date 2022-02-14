import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
// import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = product => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 md:gap-y-6 md:pb-16 justify-center items-center">
      <div className="  justify-center">
        <div className=" flex justify-center">
          {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos...</h3>}
        </div>
          {cart.map((item) => (
            <div className=" flex w-full mb-2 pl-2 pr-2 justify-between items-center">
              <div className=" flex m-2 justify-between items-center w-full border-b border-gray-50">
                <h4 className="m-0">{item.title}</h4>
                <span>${item.price}</span>
              </div>
              <button type="button" onClick={handleRemove(item)}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))}
        
      </div>
      {cart.length > 0 && (
        <div className=" justify-center w-full md:col-start-3 md:col-end-4  ">
          <div className="flex mb-2 justify-center">
            <h3 className="font-bold" >{`Precio Total: $ ${handleSumTotal()}`}</h3>
          </div>
          <Link to="/checkout/information">
            <button
              className=" w-full justify-center p-2 shadow-inner bg-gradient-to-r from-header-init to-header-end inline-block rounded-md border-blue-500 cursor-pointer "
              type="button"
            >
              Continuar pedido
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;