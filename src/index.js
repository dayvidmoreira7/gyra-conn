import React from 'react';
import ReactDOM from 'react-dom/client';
import Widget from './Widget';

const root = document.querySelector('#gyra-connect-widget');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Widget
      token={root.getAttribute('token')}
      width={root.getAttribute('width') || '500px'}
      height={root.getAttribute('height') || '700px'}
      label={root.getAttribute('label') || 'Integrar'}
    />
  </React.StrictMode>
);