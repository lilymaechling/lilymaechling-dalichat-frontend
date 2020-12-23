import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import ActionTypes from './state/actions';
import reducers from './state/reducers';
import { validateUserToken } from './state/actions/authActions';
import { authTokenName } from './constants';

import App from './components/App';
import './style.scss';

// Initialize Redux DevTools support
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

  // Only render app after authentication has been initiated
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('main'),
  );
}).catch((error) => {
  console.error(error);

  // Render error message to end user
  ReactDOM.render(
    <div>Page load error, please contact system administrator<br />{JSON.stringify(error)}</div>,
    document.getElementById('main'),
  );
});
