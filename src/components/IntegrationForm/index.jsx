import React from 'react';

import './styles.css';

const IntegrationForm = () => {
  return (
    <form>
      <div className="integration-form-container">
        <div className="integration-form-item">
          <input className="gyra-connect-input" type="email" required placeholder="E-mail" />
        </div>
        <div className="integration-form-item">
          <input className="gyra-connect-input" type="password" required placeholder="Senha" />
        </div>
        <div className="integration-form-item">
          <div className="gyra-connect-checkbox-area">
            <input className="gyra-connect-checkbox" type="checkbox" />
            {' '}
            <div className="gyra-connect-label">
              Estou ciente e permito que a Gyramais acesse em modo de leitura os dados da integração
            </div>
          </div>
        </div>
        <div className="integration-form-item">
          <button className="gyra-connect-button" type="submit">
            Integrar
          </button>
        </div>
      </div>
    </form>
  );
}

export default IntegrationForm;