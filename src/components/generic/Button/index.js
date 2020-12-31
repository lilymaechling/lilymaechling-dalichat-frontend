import React from 'react';
import './Button.scss';

const Button = ({
  label, onClick, isSubmit = false, className = '',
}) => (
  <button
    type={isSubmit ? 'submit' : 'button'}
    className={`button-container ${className}`}
    onClick={isSubmit ? () => {} : onClick}
  >
    {label}
  </button>
);

export default Button;
