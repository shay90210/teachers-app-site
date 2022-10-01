import React from 'react';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import './App.scss';

import 'typeface-cabin';
import 'typeface-open-sans';
import 'typeface-crafty-girls';
import 'typeface-indie-flower';

import 'font-awesome/css/font-awesome.css';
import '@fortawesome/free-brands-svg-icons';

import 'bootstrap-social/bootstrap-social.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import productsReducer from './features/products/productsSlice';

const container = document.getElementById('root');
const root = createRoot(container);

const store = configureStore({
  reducer:{
    products: productsReducer,
  }
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
