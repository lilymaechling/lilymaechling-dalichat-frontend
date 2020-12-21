import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';

import ActionTypes from '../state/actions';
import { signInUser, signOutUser } from '../state/actions/authActions';
import { fetchUserPosts } from '../state/actions/postActions';
import { postSearch } from '../state/actions/searchActions';
import { createErrorSelector, createLoadingSelector } from '../state/actions/requestActions';

// import requireAuth from '../hocs/requireAuth';

import Home from '../containers/pages/Home';
import Search from '../containers/pages/Search';
import Explore from '../containers/pages/Explore';
import Settings from '../containers/pages/Settings';

// import AdminPanel from '../containers/adminPanel';

import SignUpPanel from '../containers/authentication/signUpPanel';
import SignInPanel from '../containers/authentication/signInPanel';
import SignOutPanel from '../containers/authentication/signOutPanel';

import HeaderBar from '../containers/HeaderBar';
import Sidebar from '../containers/Sidebar';

import LoadingIcon from './LoadingIcon';

import './App.scss';

/**
 * Need to complete:
 * TODO: Add meta information to each page
 * TODO: Add favicon to site
 * TODO: Add post deletion
 * TODO: Add change email functionality
 * TODO: Add error messages to all action creator instances
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
  userId, isLoading, errorMessage, ...props
}) => {
  return (
    <Router>
      <div id="app-container">
        <Sidebar />
        {isLoading
          ? <LoadingIcon />
          : (
            <div id="app-right-container">
              <HeaderBar />
              <div id="app-content-container">
                <Switch>
                  <Route exact path="/welcome" component={Welcome} />

                  <Route exact path="/" component={Home} />
                  <Route exact path="/search" component={Search} />
                  <Route exact path="/explore" component={Explore} />
                  <Route exact path={['/settings', '/settings/:tab']} component={Settings} />

                  <Route exact path="/signin" component={SignInPanel} />
                  <Route exact path="/signup" component={SignUpPanel} />
                  <Route exact path="/signout" component={SignOutPanel} />

                  <Route component={FallBack} />
                </Switch>
              </div>
            </div>
          )}
      </div>
    </Router>
  );
};

const watchActions = [ActionTypes.AUTH_USER];
const loadingSelector = createLoadingSelector(watchActions);
const errorSelector = createErrorSelector(watchActions);

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  isLoading: loadingSelector(state),
  errorMessage: errorSelector(state),
});

export default connect(mapStateToProps, {
  postSearch, signInUser, signOutUser, fetchUserPosts,
})(App);
