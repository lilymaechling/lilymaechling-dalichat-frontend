import { connect } from 'react-redux';

import ActionTypes from '../../../state/actionCreators';
import { signInUser } from '../../../state/actionCreators/authActionCreators';
import {
  createLoadingSelector, createErrorSelector, setError, clearError,
} from '../../../state/actionCreators/requestActionCreators';

import SignInPanel from './SignInPanel';

// Import loading state and error messages of specified actions from redux state
const loadActions = [ActionTypes.AUTH_USER];
const loadingSelector = createLoadingSelector(loadActions);
const errorSelector = createErrorSelector(loadActions);

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  isLoading: loadingSelector(state),
  errorMessage: errorSelector(state),
});

export default connect(mapStateToProps, { signInUser, setError, clearError })(SignInPanel);
