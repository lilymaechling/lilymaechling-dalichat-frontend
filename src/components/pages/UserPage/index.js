import { connect } from 'react-redux';

import ActionTypes from '../../../store/helpers';
import { createLoadingSelector } from '../../../store/actionCreators/requestActionCreators';
import { fetchUserPosts } from '../../../store/actionCreators/postActionCreators';
import { fetchUserById } from '../../../store/actionCreators/userActionCreators';

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
