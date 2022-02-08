import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Maps';
import useGoogleAddress from '../hooks/useGoogleAddress';
// import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  console.log('2. objeto comprador',buyer);
  console.log('3. comprador',buyer[0].address);
  const location = useGoogleAddress(buyer[0].address, buyer[0].city, buyer[0].province, buyer[0].country);
 
  console.log('7. respuesta de useGoogleAddress (map)',location);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="Success-map">
            {console.log('8. antes de ir a maps'),
              <Map data={location} />}
        </div>
      </div>
    </div>
  );
}

export default Success;