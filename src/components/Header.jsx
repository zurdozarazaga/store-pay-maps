import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
// import '../styles/components/Header.css'

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className=" items-center bg-gradient-to-r from-header-init to-header-end flex justify-between  px-4 py-2 md:px-7 md:py-2 md:text-xl rounded-lg">
    <div className="rounded-lg">
      <Link to="/" >
        <img src="https://lh3.googleusercontent.com/Np8FwL8KxocpzP8eQjsbuJWsHP4A7VwLIus0x7qguklj5IdpxJWnFskfAMqZjZBEo55ddB0y8H32-I00oMPRrO3wtsGsgsLO7ZPLeTgr-mWG3hgkbrg2S-Rna-VUWu2yrXBC_7OG1z0=w1920-h1080  " alt="logo" className="rounded-lg w-16" />
      </Link>
    </div>
    <div className="">
      <h1 className="font-GreatVibes text-2xl">
        <Link to="/">SER Roma</Link>
      </h1>
    </div>
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