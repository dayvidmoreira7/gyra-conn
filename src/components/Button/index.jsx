import React from 'react';

import './styles.css'

/**
 * 
 * @param {{
 *  children: React.FC
 *  type?: String
 *  onClick?: void
 * }} props
 * @returns {React.FC}
 */
const Button = ({
  children,
  type,
  onClick,
}) => {
  return (
    <button className="gyra-connect-button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;