import React from 'react';
import { useHistory } from 'react-router-dom';
import './SidebarIcon.scss';

const SidebarIcon = ({
  to, label, active, render,
}) => {
  const history = useHistory();

  return (
    <button
      className={`sidebar-icon-container${active ? ' active' : ''}`}
      type="button"
      onClick={() => history.push(to)}
    >
      {render('sidebar-icon-image', active)}
      <p>{label}</p>
    </button>
  );
};

export default SidebarIcon;
