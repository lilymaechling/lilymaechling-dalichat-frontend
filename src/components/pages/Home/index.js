import { connect } from 'react-redux';

import ActionTypes from '../../../store/helpers';
import { fetchUserPosts, createPost, deletePostById } from '../../../store/actionCreators/postActionCreators';
import { postSearch } from '../../../store/actionCreators/searchActionCreators';
import { createLoadingSelector } from '../../../store/actionCreators/requestActionCreators';

import Home from './Home';

const watchActions = [ActionTypes.POST_SEARCH];
const loadingSelector = createLoadingSelector(watchActions);

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  user: state.auth.users?.[state.auth.userId] || {},

  postResults: state.post.results?.reduce((accum, id) => [...accum, state.post.posts?.[id]], []) || [],
  postsLoading: loadingSelector(state),
});

export default connect(mapStateToProps, {
  fetchUserPosts, createPost, postSearch, deletePostById,
})(Home);
