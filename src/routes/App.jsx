import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import Information from '../pages/Information';
import NotFound from '../pages/NotFound';
import Payment from '../pages/Payment';
import Success from '../pages/Success';
import Layout from '../containers/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const App = () => {

  const initialState = useInitialState();
  const initialOptions = {
    "client-id": 'AVYSydGsxiLA5nsOSta1LhHe9pajoq6In84ZKsBNsQvBMaRz4GpTjAiTwi-8FgYw5_kc7uOx35oTy8tZ',
    currency: "USD",
    intent: 'capture'
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <AppContext.Provider value={initialState}>
        <BrowserRouter basename='/Platzi-Conf-Merch'>
          <Layout>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/checkout' element={<Checkout/>} />
                  <Route path='/checkout/information' element={<Information/>} />
                  <Route path='/checkout/payment' element={<Payment />} />
                  <Route path='/checkout/success' element={<Success />} />
                  <Route path='*' element={<NotFound />} />
              </Routes>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    </PayPalScriptProvider>

  )
}

export default App;