import React from 'react';
import Modal from 'react-modal';

import './index.css';

const App = ({
  visible,
  width,
  height,
}) => {
  return (
    <div id="widget">
      <Modal
        isOpen={visible === 'true'}
        contentLabel="GyraConn"
        style={{
          overlay: {
            backgroundColor: '#00000090',
            display: 'flex',
            justifyContent: 'center',
          },
          content: {
            margin: 'auto',
            maxWidth: width,
            maxHeight: height,
            borderRadius: 20,
            backgroundColor: '#f0f2f5',
          },
        }}
      >
        <div className="widget-logo-area" align="center">
          <img
            className="widget-logo"
            src="https://gyramais.com.br/GyraMarca.png"
            alt="Logo"
          />
        </div>

        <h1 align="center">
          Selecione a integração que deseja realizar
        </h1>
      </Modal>
    </div>
  );
}

export default App;
