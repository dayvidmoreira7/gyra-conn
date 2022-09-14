import React from 'react';
import { Button } from '../';

import './styles.css';

/**
 * 
 * @param {{
 *  onComplete: void
 * }} props
 * @returns 
 */
const IntegrationForm = ({
  onComplete,
}) => {
  return (
    <form
      onSubmit={(e) => {
        if (e) {
          e.preventDefault();
        }

        const variables = {};
        e.target
          .querySelectorAll('input')
          .forEach((element) => variables[element.id] = element.value);
        
        console.log(variables);

        onComplete();
      }}
    >
      <div className="integration-form-container">
        <div className="integration-form-item">
          <input id="email" className="gyra-connect-input" type="email" required placeholder="E-mail" />
        </div>
        <div className="integration-form-item">
          <input id="password" className="gyra-connect-input" type="password" required placeholder="Senha" />
        </div>
        <div className="integration-form-item">
          <div className="gyra-connect-checkbox-area">
            <input id="permission" className="gyra-connect-checkbox" type="checkbox" required />
            {' '}
            <div className="gyra-connect-label">
              Estou ciente e permito que a Gyramais acesse em modo de leitura os dados da integração
            </div>
          </div>
        </div>
        <div className="integration-form-item">
          <Button type="submit">
            Integrar
          </Button>
        </div>
      </div>
    </form>
  );
}

export default IntegrationForm;