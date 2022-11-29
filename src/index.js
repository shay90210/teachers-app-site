import React from 'react';
import App from './App';
import { store } from './app/store';

import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './App.scss';

import 'typeface-cabin';
import 'typeface-open-sans';
import 'typeface-crafty-girls';
import 'typeface-indie-flower';

import 'font-awesome/css/font-awesome.css';
import '@fortawesome/free-brands-svg-icons';

import 'bootstrap-social/bootstrap-social.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
