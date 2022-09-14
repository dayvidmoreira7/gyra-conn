import React, { useMemo, useState } from 'react';
import Modal from 'react-modal';
import {
  OptionCard,
} from './components';

import './index.css';

const Widget = ({
  visible,
  width,
  height,
}) => {
  const [index, setIndex] = useState(0);
  const [selectedIntegration, setSelectedIntegration] = useState();

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
  
  const options = useMemo(() => ([{
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Rede_S.A._logo.svg/800px-Rede_S.A._logo.svg.png',
    label: 'Redecard',
  }, {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cielo_S.A._logo.svg/1200px-Cielo_S.A._logo.svg.png',
    label: 'Cielo',
  }, {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nubank_logo_2021.svg/640px-Nubank_logo_2021.svg.png',
    label: 'Nubank',
  }]), [])

  const content = useMemo(() => ([(
    <>
      <div className="widget-logo-area">
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
        {options.map(({ logo, label }) => (
          <OptionCard
            logo={logo}
            label={label}
            onClick={() => {
              setSelectedIntegration(label)
              setIndex(1);
            }}
          />
        ))}
      </div>
    </>
  ), (
    <>
      <div className="widget-logo-area">
        <div
          className="widget-back-button"
          onClick={() => {
            setSelectedIntegration();
            setIndex(0);
          }}
        >
          🡸
        </div>
        
        <img
          className="widget-logo"
          src="https://gyramais.com.br/GyraMarca.png"
          alt="Logo"
        />
      </div>

      <h1 align="center">
        Insira as informações da integração
      </h1>
    </>
  )]), [options]);

  return (
    <Modal
      isOpen={visible === 'true'}
      style={style}
      id="widget"
    >
      {content[index]}

      <div className="widget-progress" />
    </Modal>
  );
}

export default Widget;
