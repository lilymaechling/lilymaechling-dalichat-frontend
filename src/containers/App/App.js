import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import AuthContent from './AuthContent';
import ErrorPopover from '../ErrorPopover';
import LandingPage from '../../components/LandingPage';

import SignUpPanel from '../authentication/signUpPanel';
import SignInPanel from '../authentication/signInPanel';
import SignOutPanel from '../authentication/signOutPanel';

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
  authenticated, isLoading, errorMessage,
}) => {
  return (
    <Router>
      <ErrorPopover />

      <Switch>
        <Route exact path="/signin" component={SignInPanel} />
        <Route exact path="/signup" component={SignUpPanel} />
        <Route exact path="/signout" component={SignOutPanel} />

        <Route
          render={({ match, location, history }) => (
            authenticated ? (
              <AuthContent
                match={match}
                location={location}
                history={history}
              />
            ) : <LandingPage />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
