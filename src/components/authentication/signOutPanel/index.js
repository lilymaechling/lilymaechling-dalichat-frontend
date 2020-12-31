import { connect } from 'react-redux';
import { signOutUser } from '../../../store/actionCreators/authActionCreators';

import SignOutPanel from './SignOutPanel';

export default connect(null, { signOutUser })(SignOutPanel);
