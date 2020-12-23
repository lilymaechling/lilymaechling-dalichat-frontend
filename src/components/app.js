import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Route, NavLink, Switch, Redirect,
} from 'react-router-dom';

import ActionTypes from '../state/actions';
import { signInUser, signOutUser } from '../state/actions/authActions';
import { fetchUserPosts } from '../state/actions/postActions';
import { postSearch } from '../state/actions/searchActions';
import { createErrorSelector, createLoadingSelector } from '../state/actions/requestActions';

import MainContent from './MainContent';

// import AdminPanel from '../containers/adminPanel';
import SignUpPanel from '../containers/authentication/signUpPanel';
import SignInPanel from '../containers/authentication/signInPanel';
import SignOutPanel from '../containers/authentication/signOutPanel';

import './App.scss';

/**
 * Need to complete:
 * TODO: Add meta information to each page
 * TODO: Add favicon to site
 * TODO: Add change email functionality
 * TODO: Add error messages to all action creator instances
 * TODO: Make header image scroll with content
 * TODO: Design 404 page
 * TODO: Update loading component
 * TODO: Make standard input component
 *
 * TODO: Implement signout
 * TODO: Implement landing page
 *
 * TODO: Reconfigure app authentication UX (page reload, maybe skeleton loading) https://medium.com/javascript-in-plain-english/skeleton-loading-state-as-a-system-286e828ddf75
 * TODO: Standardize code style and terminology
 * TODO: Standardize loading and error implementation in components
 * TODO: Comment codebase
 */

const Welcome = () => {
  return (
    <div>
      <NavLink to="/signin">Sign In</NavLink><br />
      <NavLink to="/signup">Sign Up</NavLink><br />
    </div>
  );
};

const FallBack = () => {
  return <div>Uh oh... URL Not Found! Please contact the system administrator.</div>;
};

const App = ({
  userId, authenticated, isLoading, errorMessage, ...props
}) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/welcome" component={Welcome} />

        <Route
          exact
          path={['/', '/search', '/explore', '/settings', '/settings/:tab', '/user/:id']}
          render={({ match, location, history }) => (
            authenticated ? (
              <MainContent
                match={match}
                location={location}
                history={history}
              />
            ) : <Redirect to="/signin" />
          )}
        />

        <Route exact path="/signin" render={({ history }) => <SignInPanel history={history} />} />
        <Route exact path="/signup" component={SignUpPanel} />
        <Route exact path="/signout" component={SignOutPanel} />

        <Route component={FallBack} />
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
