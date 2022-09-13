import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import handleTotal from '../utils';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/Payment.scss';


const Payment = () => {

  const {state, addNewOrder, removeAllFromCart } = useContext(AppContext);
  const {cart, buyer} = state;
  const [paidFor, setPaidFor] = useState(false);
  const navigate = useNavigate()
  
  const handleApprove = (details) => {
    if(details.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: details
      }

      addNewOrder(newOrder);
      setPaidFor(true);
    }
  }

  if(paidFor) {
    navigate('/checkout/success');
    removeAllFromCart();
  }
  
  return (
    <div className='Payment'>
      <div className="Payment-content">
        <h3>Resumen del Pedido:</h3>

        {cart.map( (item, index) => (
          <div className="Payment-item" key={index}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <p>Total: $ {handleTotal(cart)}</p>

        <div className="Payment-button">
          <PayPalButtons
            style={{
              color: 'silver'
            }}
            createOrder={ (data, actions) => (
              actions.order.create({
                purchase_units:[{
                    amount: {
                      value: handleTotal(cart),
                    },
                }],
              })
              .then( orderID => orderID ) 
            )}
            onInit={ () => console.log('Payment Init') }
            onApprove={ (data, actions) => (
              actions.order.capture().then( (details) => {
                handleApprove(details);
              })
            )}
            onCancel={ () => console.log('Payment Canceled')}
            onError={ () => console.log('Payment Error')}
          />
        </div>
      </div>
    </div>
  )
}

export default Payment;
