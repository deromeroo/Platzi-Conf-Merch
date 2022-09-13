import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/containers/Layout.scss';

const Layout = ({children}) => {
  return (
    <div className='Layout'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout;