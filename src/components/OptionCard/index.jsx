import React from 'react';

import './styles.css';

/**
 * 
 * @param {{
 *  logo?: String
 *  label: String
 *  onClick: void
 * }} props 
 * @returns {React.FC}
 */
const OptionCard = ({
  logo,
  label,
  onClick,
}) => (
  <div
    className="option-card"
    onClick={onClick}
  >
    <img
      src={logo}
      className="option-card-logo"
      alt="Logo da plataforma"
    />

    <div className="option-card-label">
      {label}
    </div>

    <div className="option-card-progress" />
  </div>
);

export default OptionCard;
