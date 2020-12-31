import { connect } from 'react-redux';
import { signOutUser } from '../../../state/actionCreators/authActionCreators';

import SignOutPanel from './SignOutPanel';

export default connect(null, { signOutUser })(SignOutPanel);
