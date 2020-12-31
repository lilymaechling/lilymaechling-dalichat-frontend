import { connect } from 'react-redux';

import ActionTypes from '../../../state/helpers';
import { createLoadingSelector } from '../../../state/actionCreators/requestActionCreators';
import { fetchUserPosts } from '../../../state/actionCreators/postActionCreators';
import { fetchUserById } from '../../../state/actionCreators/userActionCreators';

import UserPage from './UserPage';

const userLoadingSelector = createLoadingSelector([ActionTypes.FETCH_USER]);
const postsLoadingSelector = createLoadingSelector([ActionTypes.POST_SEARCH]);

const mapStateToProps = (state, ownProps) => ({
  user: state.auth.users?.[ownProps.match.params?.id || ''],
  userPosts: state.post.results?.reduce((accum, id) => [...accum, state.post.posts?.[id]], []) || [],

  userLoading: userLoadingSelector(state),
  postsLoading: postsLoadingSelector(state),
});

export default connect(mapStateToProps, { fetchUserPosts, fetchUserById })(UserPage);
