import React from 'react';

import './styles.css'

/**
 * 
 * @param {{
 *  children: React.FC
 *  type?: String
 *  onClick?: void
 *  disabled: boolean
 * }} props
 * @returns {React.FC}
 */
const Button = ({
  children,
  type,
  onClick,
  disabled,
}) => {
  return (
    <button
      className="gyra-connect-button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;