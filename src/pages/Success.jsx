import React, { useContext } from 'react';
import Map from '../components/Map';
import AppContext from '../context/AppContext';
import useAddressPosition from '../hooks/useAddressPosition';
import '../styles/pages/Success.scss';

const Success = () => {

  const {state} = useContext(AppContext);
  const {buyer} = state;
  const {address} = buyer;
  
  const location = useAddressPosition(`${address}, ${buyer.state}`);
  
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu Compra!`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <Map location={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;
