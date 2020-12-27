import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';

import ActionTypes from '../state/actionCreators';
import { signInUser, signOutUser } from '../state/actionCreators/authActionCreators';
import { fetchUserPosts } from '../state/actionCreators/postActionCreators';
import { postSearch } from '../state/actionCreators/searchActionCreators';
import { createErrorSelector, createLoadingSelector } from '../state/actionCreators/requestActionCreators';

import MainContent from './MainContent';
import Landing from './Landing';

// import AdminPanel from '../containers/adminPanel';
import SignUpPanel from '../containers/authentication/signUpPanel';
import SignInPanel from '../containers/authentication/signInPanel';
import SignOutPanel from '../containers/authentication/signOutPanel';

import './App.scss';

/**
 * * Development
 * TODO: Add meta information to each page
 * TODO: Add change email functionality
 * TODO: Make header image scroll with content
 *
 * * Design
 * TODO: Design 404 page
 * TODO: Add error messages to all action creator instances
 * TODO: Design loading component
 * TODO: Design signout
 *
 * * In Progress
 *
 * * Final Cleanup
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
            ) : <Landing />
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
