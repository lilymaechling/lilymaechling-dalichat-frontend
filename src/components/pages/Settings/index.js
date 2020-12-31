import { connect } from 'react-redux';

import { setError, clearError } from '../../../state/actionCreators/requestActionCreators';
import { updateUserById } from '../../../state/actionCreators/userActionCreators';

import Settings from './Settings';

const mapStateToProps = (state) => ({
  user: state.auth.users?.[state.auth.userId] || {},
});

export default connect(mapStateToProps, { setError, clearError, updateUserById })(Settings);
