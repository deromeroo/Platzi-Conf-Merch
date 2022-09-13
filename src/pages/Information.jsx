import React, { useContext, useRef } from "react";
import {useNavigate} from 'react-router-dom';
import AppContext from "../context/AppContext";
import "../styles/pages/Information.scss";
import handleTotal from "../utils";

const Information = () => {

  const {state: {cart}, addToBuyer} = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = Object.fromEntries(formData);
    addToBuyer(buyer);
    navigate('/checkout/payment');
  }

  return (
    <div className="Information">

      <div className="Information-sidebar">
        <h3>Pedido:</h3>

        {cart.map( (item, index) => (
          <div className="Information-item" key={index}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>{item.price} $</span>
            </div>
          </div>
        ))}

        <p>Total: $ {handleTotal(cart)}</p>
      </div>

      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de Contacto:</h2>
        </div>

        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre Completo" name="name" required/>
            <input type="email" placeholder="Correo Electronico" name="email" required/>
            <input type="text" placeholder="Dirección" name="address" required/>
            <input type="text" placeholder="Apto" name="apto" required/>
            <input type="text" placeholder="Ciudad" name="city" required/>
            <input type="text" placeholder="Estado" name="state" required/>
            <input type="text" placeholder="País" name="country" required/>
            <input type="text" placeholder="Código Postal" name="cp"required />
            <input type="tel"  placeholder="Telefono" name="phone" required/>
          </form>
        </div>

        <div className="Information-buttons">
          <button 
            className="Information-back"
            type="button"
            onClick={ () => navigate('/checkout')  }
          >
            Regresar</button>
          <button 
            className="Information-next"
            type="button"
            onClick={handleSubmit}
          >
            Pagar
          </button>
        </div>

      </div>

    </div>
  );
};

export default Information;
