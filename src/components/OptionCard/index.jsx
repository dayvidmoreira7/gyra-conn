import React from 'react';

import './styles.css';

/**
 * 
 * @param {{
 *  logo?: String
 *  label: String
 *  onClick: void
 *  count?: number
 * }} props 
 * @returns {React.FC}
 */
const OptionCard = ({
  logo,
  label,
  onClick,
  count,
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

    {count > 0 && (
      <div className="option-card-count">
        {count}
      </div>
    )}

    <div className="option-card-progress" />
  </div>
);

export default OptionCard;
