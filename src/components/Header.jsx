import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
// import '../styles/components/Header.css'

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className=" bg-gradient-to-r from-header-init to-header-end flex justify-between p-5 text-xl  ">
      <h1 className="text-blue-600">
        <Link to="/">SER Roma</Link>
      </h1>
      <div className="">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="">{cart.length}</div>}
      </div>
    </div>
  );
}

export default Header;