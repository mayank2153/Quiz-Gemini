import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from "./app/store.js" 
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <h1>AI Quiz Generator</h1>
    <App />
  </Provider>
);
