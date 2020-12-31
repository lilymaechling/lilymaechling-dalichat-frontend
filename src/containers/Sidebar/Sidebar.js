import React from 'react';
import { Link } from 'react-router-dom';

import SidebarIcon from '../../components/SidebarIcon';
import SidebarLogo from '../../../public/icons/dali_logo.svg';

import HomeActive from '../../../public/icons/home_active.svg';
import HomeInactive from '../../../public/icons/home.svg';
import SearchActive from '../../../public/icons/search_active.svg';
import SearchInactive from '../../../public/icons/search.svg';
import ExploreActive from '../../../public/icons/explore_active.svg';
import ExploreInactive from '../../../public/icons/explore.svg';
import SettingsActive from '../../../public/icons/settings_active.svg';
import SettingsInactive from '../../../public/icons/settings.svg';

import './Sidebar.scss';

const Sidebar = ({ match, location, history }) => {
  return (
    <div id="sidebar-container">
      <Link to="/" id="sidebar-logo">
        <SidebarLogo />
      </Link>

      <nav>
        <SidebarIcon
          to="/"
          label="Home"
          key="home"
          active={location.pathname === '/'}
          render={(className, active) => (active ? <HomeActive /> : <HomeInactive />
          )}
        />

        <SidebarIcon
          to="/search"
          label="Search"
          hey="search"
          active={location.pathname === '/search'}
          render={(className, active) => (active ? <SearchActive /> : <SearchInactive />)}
        />

        <SidebarIcon
          to="/explore"
          label="Explore"
          key="explore"
          active={location.pathname === '/explore'}
          render={(className, active) => (active ? <ExploreActive /> : <ExploreInactive />
          )}
        />

        <SidebarIcon
          to="/settings"
          label="Settings"
          key="settings"
          active={location.pathname === '/settings'}
          render={(className, active) => (active ? <SettingsActive /> : <SettingsInactive />
          )}
        />
      </nav>
    </div>
  );
};

export default Sidebar;
