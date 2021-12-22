import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store, persistor} from './redux/store';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <PersistGate persistor = {persistor}>
    <App />
    </PersistGate>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*************************************JUST SOME NOTES ABOUT REDUX*****************************************
 * Provider is a component we get from react-redux
 * We want to wrap it around the entire application because we want everything inside to have access to the store object
 * that we get from Redux
 * 
 * then we can pass the store into the properties of the provider
 * 
 */
