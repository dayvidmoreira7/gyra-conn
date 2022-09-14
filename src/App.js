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
        x
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        x
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        x
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        x
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        x
      </div>

      <div className="widget-progress" />
    </Modal>
  );
}

export default App;
