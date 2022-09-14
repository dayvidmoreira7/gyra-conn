import React from 'react';
import ReactDOM from 'react-dom/client';
import Widget from './Widget';

const root = document.querySelector('#gyra-connect-widget');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Widget
      visible={root.getAttribute('visible')}
      token={root.getAttribute('token')}
      width={root.getAttribute('width') || '500px'}
      height={root.getAttribute('height') || '700px'}
    />
  </React.StrictMode>
);