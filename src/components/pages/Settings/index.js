import { connect } from 'react-redux';

import { setError, clearError } from '../../../store/actionCreators/requestActionCreators';
import { updateUserById } from '../../../store/actionCreators/userActionCreators';

import Settings from './Settings';

const mapStateToProps = (state) => ({
  user: state.auth.users?.[state.auth.userId] || {},
});

export default connect(mapStateToProps, { setError, clearError, updateUserById })(Settings);
