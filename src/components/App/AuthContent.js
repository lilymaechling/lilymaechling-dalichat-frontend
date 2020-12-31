import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderBar from '../layout/HeaderBar';
import Sidebar from '../layout/Sidebar';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Explore from '../pages/Explore';
import Settings from '../pages/Settings';
import UserPage from '../pages/UserPage';
import Fallback from '../pages/Fallback';

import './App.scss';

const AuthContent = () => (
  <div id="app-auth-container">
    <Sidebar />
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
  </div>
);

export default AuthContent;
