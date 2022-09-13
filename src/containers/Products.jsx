import React, { useContext } from 'react';
import Product from '../components/Product';
import AppContext from '../context/AppContext';
import '../styles/containers/Products.scss';

const Products = () => {

  const {state: {products} } = useContext(AppContext);

  return (
    <div className='Products'>
        <div className="Products-items">
            {products.map( product => (
                <Product  key={product.id}  product={product} /> 
            ))}
        </div>
    </div>
  )
}

export default Products;