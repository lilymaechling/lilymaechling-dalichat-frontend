import { connect } from 'react-redux';

import ActionTypes from '../../state/helpers';
import { createLoadingSelector } from '../../state/actionCreators/requestActionCreators';

import App from './App';

const watchActions = [ActionTypes.AUTH_USER];
const loadingSelector = createLoadingSelector(watchActions);

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  isLoading: loadingSelector(state),
});

export default connect(mapStateToProps, {})(App);
