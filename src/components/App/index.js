import { connect } from 'react-redux';

import ActionTypes from '../../state/actionCreators';
import { createErrorSelector, createLoadingSelector } from '../../state/actionCreators/requestActionCreators';

import App from './App';

const watchActions = [ActionTypes.AUTH_USER];
const loadingSelector = createLoadingSelector(watchActions);
const errorSelector = createErrorSelector(watchActions);

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  isLoading: loadingSelector(state),
  errorMessage: errorSelector(state),
});

export default connect(mapStateToProps, {})(App);
