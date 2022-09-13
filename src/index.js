import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.querySelector('#gyra-connect-widget');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App visible={root.dataset.visible} />
  </React.StrictMode>
);