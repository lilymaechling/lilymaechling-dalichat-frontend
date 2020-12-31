import { connect } from 'react-redux';

import ActionTypes from '../../../state/actionCreators';
import { createLoadingSelector } from '../../../state/actionCreators/requestActionCreators';
import { fetchUserPosts } from '../../../state/actionCreators/postActionCreators';
import { fetchUserById } from '../../../state/actionCreators/userActionCreators';

import UserPage from './UserPage';

const watchActions = [ActionTypes.AUTH_USER];
const userLoadingSelector = createLoadingSelector([...watchActions, ActionTypes.FETCH_USER]);
const resultsLoadingSelector = createLoadingSelector([...watchActions, ActionTypes.POST_SEARCH]);

const mapStateToProps = (state, ownProps) => ({
  user: state.auth.users?.[ownProps.match.params?.id || ''],
  userPosts: state.post.results?.reduce((accum, id) => [...accum, state.post.posts?.[id]], []) || [],

  userIsLoading: userLoadingSelector(state),
  postsAreLoading: resultsLoadingSelector(state),
});

export default connect(mapStateToProps, { fetchUserPosts, fetchUserById })(UserPage);
