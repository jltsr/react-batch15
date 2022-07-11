import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/Store';

import StoreToolkit from './Toolkit/StoreToolkit';
import { Provider } from 'react-redux';
import Route from './Route';
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.render(
  <Provider store={StoreToolkit}>
    <HelmetProvider>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
