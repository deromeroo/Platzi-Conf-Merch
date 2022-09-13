import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import handleTotal from '../utils';
import '../styles/pages/Checkout.scss';

const Checkout = () => {

  const {state: {cart}, removeFromCart} = useContext(AppContext);
  
  return (
    <div className='Checkout'>

      <div className="Checkout-content">
          { cart.length > 0
              ? <h3>Lista de Pedidos:</h3>
              : <h3>Sin Pedidos...</h3>
          }

          {cart.map( (item, index) => (
            <div className="Checkout-item" key={index}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
              <button 
                type='button'
                onClick={ () => removeFromCart(index) }
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          ))}
      </div>

      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3> Total: <span>{`$ ${handleTotal(cart)}`}</span></h3>
          <Link to={'/checkout/information'}>
            <button type='button'>Continuar</button>
          </Link>
        </div>
      )}


    </div>
  )
}

export default Checkout