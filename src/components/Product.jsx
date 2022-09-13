import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Product.scss';

const Product = ({product}) => {

  const { addToCart } = useContext(AppContext);

  return (
    <div className='Product'>
        <img src={product.image} alt={product.title} />
        <div className="Product-info">
            <h2>{product.title}
                <span>$ {product.price}</span>
            </h2>
            <p>{product.description}</p>
        </div>
        <button 
          type='button'
          onClick={ () => addToCart(product) }
        >
          Añadir
        </button>
    </div>
  )
}

export default Product;