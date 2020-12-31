import { connect } from 'react-redux';

import ActionTypes from '../../../state/helpers';
import { signUpUser } from '../../../state/actionCreators/authActionCreators';
import {
  createErrorSelector, setError, clearError, createLoadingSelector,
} from '../../../state/actionCreators/requestActionCreators';

import SignUpPanel from './SignUpPanel';

// Import loading state and error messages of specified actions from redux state
const loadActions = [ActionTypes.AUTH_USER];
const loadingSelector = createLoadingSelector(loadActions);
const errorSelector = createErrorSelector(loadActions);

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  isLoading: loadingSelector(state),
  errorMessage: errorSelector(state),
});

export default connect(mapStateToProps, { signUpUser, setError, clearError })(SignUpPanel);
