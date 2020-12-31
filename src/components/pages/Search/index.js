import { connect } from 'react-redux';

import ActionTypes from '../../../state/actionCreators';
import { postSearch, userSearch } from '../../../state/actionCreators/searchActionCreators';
import { createErrorSelector, createLoadingSelector } from '../../../state/actionCreators/requestActionCreators';

import Search from './Search';

const loadActions = [ActionTypes.AUTH_USER, ActionTypes.FETCH_POSTS];
const loadingSelector = createLoadingSelector([ActionTypes.POST_SEARCH, ActionTypes.USER_SEARCH]);
const errorSelector = createErrorSelector(loadActions);

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  user: state.auth.users?.[state.auth.userId] || {},

  posts: state.post.posts,
  users: state.auth.users,

  postResults: state.post.results?.reduce((accum, id) => [...accum, state.post.posts?.[id]], []) || [],
  userResults: state.auth.results?.reduce((accum, id) => [...accum, state.auth.users?.[id]], []) || [],
  numResults: state.post.numResults,

  isLoading: loadingSelector(state),
  errorMessage: errorSelector(state),
});

export default connect(mapStateToProps, { postSearch, userSearch })(Search);
