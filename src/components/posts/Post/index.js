import { connect } from 'react-redux';

import ActionTypes from '../../../state/actionCreators';
import { likePost } from '../../../state/actionCreators/postActionCreators';
import { createLoadingSelector } from '../../../state/actionCreators/requestActionCreators';

import Post from './Post';

const loadingSelector = createLoadingSelector([ActionTypes.AUTH_USER]);

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  isLoading: loadingSelector(state),
});

export default connect(mapStateToProps, { likePost })(Post);
