import React, { useMemo } from 'react';
import Modal from 'react-modal';

import './index.css';

const App = ({
  visible,
  width,
  height,
}) => {
  const style = useMemo(() => ({
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
      border: 0,
    },
  }), [width, height]);

  return (
    <Modal
      isOpen={visible === 'true'}
      contentLabel="GyraConn"
      style={style}
      id="widget"
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

      <div className="widget-list-area">
        <div className="widget-list-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Rede_S.A._logo.svg/800px-Rede_S.A._logo.svg.png"
            className="widget-list-item-logo"
            alt="Logo da plataforma"
          />

          <div className="widget-list-item-label">
            Redecard
          </div>
        </div>

        <div className="widget-list-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cielo_S.A._logo.svg/1200px-Cielo_S.A._logo.svg.png"
            className="widget-list-item-logo"
            alt="Logo da plataforma"
          />

          <div className="widget-list-item-label">
            Cielo
          </div>
        </div>
      </div>

      <div className="widget-progress" />
    </Modal>
  );
}

export default App;
