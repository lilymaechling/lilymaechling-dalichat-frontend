import { connect } from 'react-redux';

import ActionTypes from '../../../state/helpers';
import { postSearch, userSearch } from '../../../state/actionCreators/searchActionCreators';
import { createLoadingSelector } from '../../../state/actionCreators/requestActionCreators';

import Search from './Search';

const userSearchLoadingSelector = createLoadingSelector([ActionTypes.USER_SEARCH]);
const postSearchLoadingSelector = createLoadingSelector([ActionTypes.POST_SEARCH]);

const mapStateToProps = (state) => ({
  user: state.auth.users?.[state.auth.userId] || {},
  posts: state.post.posts,

  postResults: state.post.results?.reduce((accum, id) => [...accum, state.post.posts?.[id]], []) || [],
  userResults: state.auth.results?.reduce((accum, id) => [...accum, state.auth.users?.[id]], []) || [],

  postsLoading: postSearchLoadingSelector(state),
  usersLoading: userSearchLoadingSelector(state),
});

export default connect(mapStateToProps, { postSearch, userSearch })(Search);
