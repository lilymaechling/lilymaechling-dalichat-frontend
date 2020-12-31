import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HeaderBar from './HeaderBar';

const mapStateToProps = (state) => ({
  user: state.auth.users?.[state.auth.userId] || {},
});

export default withRouter(connect(mapStateToProps, { })(HeaderBar));
