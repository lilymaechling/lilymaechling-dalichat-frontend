import { connect } from 'react-redux';
import { likePost } from '../../../store/actionCreators/postActionCreators';
import Post from './Post';

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
});

export default connect(mapStateToProps, { likePost })(Post);
