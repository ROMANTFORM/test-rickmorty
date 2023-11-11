import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>  
    </BrowserRouter> 
  </React.StrictMode>
);
