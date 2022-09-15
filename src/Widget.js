import React, { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal';
import {
  IntegrationForm,
  OptionCard,
  Button,
} from './components';

import './index.css';

const colorIsLighter = (color) => {
  const hex = color.replace('#', '');
  const c_r = parseInt(hex.substring(0, 0 + 2), 16) * 299;
  const c_g = parseInt(hex.substring(2, 2 + 2), 16) * 587;
  const c_b = parseInt(hex.substring(4, 4 + 2), 16) * 114;
  
  return ((c_r + c_g + c_b) / 1000) > 155;
}

/**
 * 
 * @param {{
 *  token: String
 *  label?: String
 *  width?: String
 *  height?: String
 * }} param0 
 * @returns 
 */
const Widget = ({
  token,
  width,
  height,
  label,
}) => {
  const [visible, setVisible] = useState(true);

  const [index, setIndex] = useState(0);
  const [selectedIntegration, setSelectedIntegration] = useState();

  const [partner, setPartner] = useState();

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

  const storedCredentials = useMemo(() => {
    const credentials = JSON.parse(localStorage.getItem('credentials') || '[]');

    return credentials;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, visible]);

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
            key={label}
            logo={logo}
            label={label}
            onClick={() => {
              setSelectedIntegration(label)
              setIndex(1);
            }}
            count={storedCredentials.filter(({ integration }) => integration === label).length}
          />
        ))}
      </div>

      <Button
        onClick={() => {
          localStorage.clear();

          setIndex(2);
        }}
        disabled={storedCredentials.length === 0}
      >
        Concluir
      </Button>
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
        Insira as informações da integração {selectedIntegration}
      </h1>
      
      <div className="widget-form-area">
        <IntegrationForm
          integration={selectedIntegration}
          onComplete={() => {
            setSelectedIntegration();
            setIndex(0);
          }}
        />
      </div>
    </>
  ), (
    <>
      <div className="widget-logo-area">
        <img
          className="widget-logo"
          src="https://gyramais.com.br/GyraMarca.png"
          alt="Logo"
        />
      </div>

      <h1 align="center">
        Recebemos suas informações!
      </h1>
      
      <div className="widget-blank-space" />

      <Button
        onClick={() => {
          setVisible(false);
          setIndex(0);
        }}
      >
        Finalizar
      </Button>
    </>
  )]), [options, selectedIntegration, storedCredentials]);

  useEffect(() => {
    if (token) {
      if (token === 'gyramais') {
        return setPartner(true);
      }

      fetch(`https://api.bewiz.com.br/hackathon/find_by_token/${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((data) => data.json()).then((data) => {
        console.log(data);
        setPartner(data);
      })
    }
  }, [token]);

  useEffect(() => {
    if (partner) {
      if (partner.colors) {
        document.querySelector(':root').style.setProperty('--primary-color', partner.colors);
        document.querySelector(':root').style.setProperty('--primary-text-color', colorIsLighter(partner.colors) ? '#000000' : '#ffffff');
      }
    }
  }, [partner]);

  return (
    <>
      {partner && (
        <>
          <Button onClick={() => setVisible(true)}>{label}</Button>

          <Modal
            isOpen={visible}
            onRequestClose={() => setVisible(false)}
            style={style}
            id="widget"
          >
            {content[index]}

            <div className="widget-progress" />
          </Modal>
        </>
      )}
    </>
  );
}

export default Widget;
