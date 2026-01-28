import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '../store'; // Redux store
import App from './App'; // App.js (yoki App.tsx) ni import qiling
import '../css/index.css';  // Agar kerak bo'lsa
import  '../css/navbar.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
