import { connect } from 'react-redux';

import ActionTypes from '../../../state/actionCreators';
import { createLoadingSelector, createErrorSelector } from '../../../state/actionCreators/requestActionCreators';
import { postSearch } from '../../../state/actionCreators/searchActionCreators';

import Explore from './Explore';

const watchActions = [ActionTypes.POST_SEARCH];
const loadingSelector = createLoadingSelector(watchActions);
const errorSelector = createErrorSelector(watchActions);

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  user: state.auth.users?.[state.auth.userId] || {},

  postResults: state.post.results?.reduce((accum, id) => [...accum, state.post.posts?.[id]], []) || [],

  isLoading: loadingSelector(state),
  errorMessage: errorSelector(state),
});

export default connect(mapStateToProps, { postSearch })(Explore);
