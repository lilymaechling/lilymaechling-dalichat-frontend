import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/pages/Home';
import Search from '../containers/pages/Search';
import Explore from '../containers/pages/Explore';
import Settings from '../containers/pages/Settings';
import UserPage from '../containers/pages/UserPage';

import HeaderBar from '../containers/HeaderBar';
import Sidebar from '../containers/Sidebar';

import LoadingIcon from './LoadingIcon';

import './App.scss';

const MainContent = ({
  match, location, history,
  isLoading, ...props
}) => (
  <div id="app-main-container">
    <Sidebar />
    {isLoading
      ? <LoadingIcon />
      : (
        <div id="app-main-right-container">
          <HeaderBar />
          <div id="app-main-content-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/explore" component={Explore} />
              <Route exact path={['/settings', '/settings/:tab']} component={Settings} />
              <Route exact path="/user/:id" component={UserPage} />
            </Switch>
          </div>
        </div>
      )}
  </div>
);

export default MainContent;
