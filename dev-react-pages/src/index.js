import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, useLocation, useParams } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
