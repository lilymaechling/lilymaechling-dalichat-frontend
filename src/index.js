import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import ActionTypes from './state/actions';
import reducers from './state/reducers';
import { authTokenName } from './constants';
import { validateUserToken } from './state/actions/authActions';

import App from './components/App';
import './style.scss';

// this creates the store with the reducers, and does some other stuff to initialize devtools
// boilerplate to copy, don't have to know
const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));

// Check if auth token is present in browser
const getTokenFromLocalStorage = async () => {
  return localStorage.getItem(authTokenName);
};

getTokenFromLocalStorage().then(async (authToken) => {
  if (authToken) { // User has previous authentication token
    store.dispatch(validateUserToken());
  } else { // No authorization
    store.dispatch({ type: `${ActionTypes.DEAUTH_USER}_SUCCESS` });
  }
}).catch((error) => {
  console.error(error);
});

// we now wrap App in a Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
);
