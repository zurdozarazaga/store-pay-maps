import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
// import '../styles/components/Information.css';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate()
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer);
    navigate('/checkout/payment')
  }

  return (
    <div className=" grid md:grid-cols-3 md:gap-2 md:gap-y-6 md:mb-16 ">
      <div className="">
        <div className="flex justify-center">
          <h2 className='mt-2 p-0'>Informacion de contacto:</h2>
        </div>
        <div >
          <form className="justify-center w-full" ref={form}>
            <input className="md:input w-full p-2 mb-2 border border-solid border-gray-300 rounded-lg" type="text" placeholder="Nombre completo" name="name" />
            <input className="md:input w-full p-2 mb-2 border border-solid border-gray-300 rounded-lg" type="text" placeholder="Correo Electronico" name="email" />
            <input className="md:input w-full p-2 mb-2 border border-solid border-gray-300 rounded-lg" type="text" placeholder="Direccion" name="address" />
            <input className="md:input w-full p-2 mb-2 border border-solid border-gray-300 rounded-lg" type="text" placeholder="Apto" name="apto" />
            <input className="md:input w-full p-2 mb-2 border border-solid border-gray-300 rounded-lg" type="text" placeholder="Ciudad" name="city" />
            <input className="md:input w-full p-2 mb-2 border border-solid border-gray-300 rounded-lg" type="text" placeholder="Pais" name="country" />
            <input className="md:input w-full p-2 mb-2 border border-solid border-gray-300 rounded-lg" type="text" placeholder="Estado" name="state" />
            <input className="md:input w-full p-2 mb-2 border border-solid border-gray-300 rounded-lg" type="text" placeholder="Codigo postal" name="cp" />
            <input className="md:input w-full p-2 mb-2 border border-solid border-gray-300 rounded-lg" type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
      <div className=" mt-2.5">
        <div className="flex justify-center">
          <h3 className=' md:row-start-2 md:row-end-3 mt-2 text-lg p-0' >Pedido:</h3>
        </div>
        {cart.map((item) => (
          <div className="flex justify-between items-center" key={item.title}>
            <div className="flex justify-between items-center w-full border-solid border-gray-100 ">
              <h4 className='m-0'>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
        <div className="flex justify-between">
          <div className=" mt-2.5 ml-3 p-2 shadow-inner bg-gradient-to-r from-header-init to-header-end inline-block rounded-md border-blue-500 cursor-pointe" type="button">
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
          <div >
            <button className=" mt-2.5 mr-3 p-2 shadow-inner bg-gradient-to-r from-header-init to-header-end inline-block rounded-md border-blue-500 cursor-pointe" type="button" onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
