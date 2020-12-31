import React from 'react';
import './Tab.scss';

const Tab = ({ label, isActive, onClick }) => (
  <li className={`tab-container${isActive ? ' active' : ''}`}>
    <button type="button" onClick={onClick}>
      {label}
    </button>
  </li>
);

export default Tab;
