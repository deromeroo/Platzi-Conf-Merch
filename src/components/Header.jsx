import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.scss';

const Header = () => {

  const { state: {cart} } = useContext(AppContext);

  return (
    <div className="Header">
      <Link to={'/'}>
        <h1 className='Header-title'>Platzi Conf Merch</h1>
      </Link>
      <div className="Header-checkout">
        <Link
          to={'/checkout'}
        > 
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        {cart.length > 0 
          ? <div className="Header-alert">{cart.length}</div>
          : null
        }
      </div>
    </div>
  )
}

export default Header; 