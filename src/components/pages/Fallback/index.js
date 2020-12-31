import { connect } from 'react-redux';
import Fallback from './Fallback';

const mapStateToProps = (state) => ({
  user: state.auth.users?.[state.auth.userId] || {},
});

export default connect(mapStateToProps, {})(Fallback);
