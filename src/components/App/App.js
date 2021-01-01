import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import AuthContent from './AuthContent';
import ErrorPopover from '../generic/ErrorPopover';
import LoadingIcon from '../generic/LoadingIcon';
import LandingPage from '../pages/LandingPage';

import SignUpPanel from '../authentication/SignUpPanel';
import SignInPanel from '../authentication/SignInPanel';
import SignOutPanel from '../authentication/SignOutPanel';

import './App.scss';

const App = ({
  authenticated, isLoading,
}) => (
  <Router>
    <ErrorPopover />
    {isLoading ? <LoadingIcon /> : (
      <Switch>
        <Route exact path="/signin" component={SignInPanel} />
        <Route exact path="/signup" component={SignUpPanel} />
        <Route exact path="/signout" component={SignOutPanel} />

        <Route
          render={() => (
            authenticated
              ? <AuthContent />
              : <LandingPage />
          )}
        />
      </Switch>
    )}
  </Router>
);

export default App;
