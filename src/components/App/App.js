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

/**
 * * Final Cleanup
 * TODO: Standardize code style and terminology
 * TODO: Standardize loading and error implementation in components
 * TODO: Comment codebase
 *
 * Reach Features
 * ?: Reconfigure app authentication UX (page reload, maybe skeleton loading) https://medium.com/javascript-in-plain-english/skeleton-loading-state-as-a-system-286e828ddf75
 * ? Design loading component
 */

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
