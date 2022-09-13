import React from 'react';
import Modal from 'react-modal';

const App = ({ visible }) => {
  return (
    <div className="App">
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
            // maxWidth: 1200,
            // maxHeight: 700,
          },
        }}
      >
        Teste
      </Modal>
    </div>
  );
}

export default App;
