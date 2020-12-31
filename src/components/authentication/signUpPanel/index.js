import { connect } from 'react-redux';

import { signUpUser } from '../../../state/actionCreators/authActionCreators';
import { setError, clearError } from '../../../state/actionCreators/requestActionCreators';

import SignUpPanel from './SignUpPanel';

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, { signUpUser, setError, clearError })(SignUpPanel);
