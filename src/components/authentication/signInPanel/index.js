import { connect } from 'react-redux';
import { signInUser } from '../../../store/actionCreators/authActionCreators';
import { setError, clearError } from '../../../store/actionCreators/requestActionCreators';

import SignInPanel from './SignInPanel';

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, { signInUser, setError, clearError })(SignInPanel);
