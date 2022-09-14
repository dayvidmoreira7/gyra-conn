import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.querySelector('#gyra-connect-widget');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App
      visible={root.getAttribute('visible')}
      width={root.getAttribute('width') || '500px'}
      height={root.getAttribute('height') || '700px'}
    />
  </React.StrictMode>
);