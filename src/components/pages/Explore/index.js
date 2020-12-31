import { connect } from 'react-redux';

import ActionTypes from '../../../state/helpers';
import { createLoadingSelector } from '../../../state/actionCreators/requestActionCreators';
import { postSearch } from '../../../state/actionCreators/searchActionCreators';

import Explore from './Explore';

const watchActions = [ActionTypes.POST_SEARCH];
const loadingSelector = createLoadingSelector(watchActions);

const mapStateToProps = (state) => ({
  user: state.auth.users?.[state.auth.userId] || {},

  postResults: state.post.results?.reduce((accum, id) => [...accum, state.post.posts?.[id]], []) || [],
  postsLoading: loadingSelector(state),
});

export default connect(mapStateToProps, { postSearch })(Explore);
