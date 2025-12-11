import React from 'react';
import ReactDOM from 'react-dom/client';  // react-dom/clientdan import qilish
import './css/index.css';
import App from './app/App.tsx';  // default import of App

const root = ReactDOM.createRoot(document.getElementById('root'));  // createRoot() ni ishlating

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
