import { connect } from 'react-redux';

import ActionTypes from '../../../state/actionCreators';
import { fetchUserPosts, createPost, deletePostById } from '../../../state/actionCreators/postActionCreators';
import { postSearch } from '../../../state/actionCreators/searchActionCreators';
import { createLoadingSelector, createErrorSelector } from '../../../state/actionCreators/requestActionCreators';

import Home from './Home';

const loadActions = [ActionTypes.AUTH_USER, ActionTypes.POST_SEARCH];
const loadingSelector = createLoadingSelector([ActionTypes.POST_SEARCH]);
const errorSelector = createErrorSelector(loadActions);

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  user: state.auth.users?.[state.auth.userId] || {},

  postResults: state.post.results?.reduce((accum, id) => [...accum, state.post.posts?.[id]], []) || [],

  isLoading: loadingSelector(state),
  errorMessage: errorSelector(state),
});

export default connect(mapStateToProps, {
  fetchUserPosts, createPost, postSearch, deletePostById,
})(Home);
