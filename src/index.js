import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';

import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import reducer from './services/store/reducer';
import {createStore} from "redux";
import { Provider } from 'react-redux';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  
);


reportWebVitals();
