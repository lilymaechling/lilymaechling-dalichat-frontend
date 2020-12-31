import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Explore from '../pages/Explore';
import Settings from '../pages/Settings';
import UserPage from '../pages/UserPage';
import Fallback from '../pages/Fallback';

import HeaderBar from '../HeaderBar';
import Sidebar from '../Sidebar';
import LoadingIcon from '../../components/LoadingIcon';

import './App.scss';

const AuthContent = ({
  match, location, history,
  isLoading, ...props
}) => (
  <div id="app-auth-container">
    <Sidebar />
    {isLoading
      ? <LoadingIcon />
      : (
        <div id="app-auth-right-container">
          <HeaderBar />
          <div id="app-auth-content-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/explore" component={Explore} />
              <Route exact path={['/settings', '/settings/:tab']} component={Settings} />
              <Route exact path="/user/:id" component={UserPage} />

              <Route component={Fallback} />
            </Switch>
          </div>
        </div>
      )}
  </div>
);

export default AuthContent;
