// index.js or main entry file
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/App.css';
import App from './components/App'; // adjust the path if needed
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/My_portfolio">
    <App />
  </BrowserRouter>
);
