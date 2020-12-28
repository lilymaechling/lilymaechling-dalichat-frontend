import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import ActionTypes from '../state/actionCreators';
import { signInUser, signOutUser } from '../state/actionCreators/authActionCreators';
import { fetchUserPosts } from '../state/actionCreators/postActionCreators';
import { postSearch } from '../state/actionCreators/searchActionCreators';
import { createErrorSelector, createLoadingSelector } from '../state/actionCreators/requestActionCreators';

import AuthContent from './AuthContent';
import ErrorPopover from './ErrorPopover';
import LandingPage from '../components/LandingPage';

import SignUpPanel from './authentication/signUpPanel';
import SignInPanel from './authentication/signInPanel';
import SignOutPanel from './authentication/signOutPanel';

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
  userId, authenticated, isLoading, errorMessage, ...props
}) => {
  return (
    <Router>
      <ErrorPopover />

      <Switch>
        <Route exact path="/signin" render={SignInPanel} />
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

const watchActions = [ActionTypes.AUTH_USER];
const loadingSelector = createLoadingSelector(watchActions);
const errorSelector = createErrorSelector(watchActions);

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  userId: state.auth.userId,

  isLoading: loadingSelector(state),
  errorMessage: errorSelector(state),
});

export default connect(mapStateToProps, {
  postSearch, signInUser, signOutUser, fetchUserPosts,
})(App);
