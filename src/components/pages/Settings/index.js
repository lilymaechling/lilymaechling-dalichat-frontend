import { connect } from 'react-redux';

import ActionTypes from '../../../state/helpers';
import { createLoadingSelector, createErrorSelector, setError } from '../../../state/actionCreators/requestActionCreators';
import { updateUserById } from '../../../state/actionCreators/userActionCreators';

import Settings from './Settings';

const watchActions = [ActionTypes.AUTH_USER, ActionTypes.FETCH_USER];
const loadingSelector = createLoadingSelector(watchActions);
const errorSelector = createErrorSelector(watchActions);

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  user: state.auth.users?.[state.auth.userId] || {},

  isLoading: loadingSelector(state),
  errorMessage: errorSelector(state),
});

export default connect(mapStateToProps, { setError, updateUserById })(Settings);
