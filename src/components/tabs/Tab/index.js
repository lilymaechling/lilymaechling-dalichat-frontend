import React from 'react';
import './Tab.scss';

const Tab = ({
  isActive, label, onClick,
}) => (
  <div className={`tab-container ${isActive ? 'active' : ''}`}>
    <button type="button" onClick={onClick}>
      {label}
    </button>
  </div>

);

export default Tab;
