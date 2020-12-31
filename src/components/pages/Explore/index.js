import { connect } from 'react-redux';

import ActionTypes from '../../../store/helpers';
import { createLoadingSelector } from '../../../store/actionCreators/requestActionCreators';
import { postSearch } from '../../../store/actionCreators/searchActionCreators';

import Explore from './Explore';

const watchActions = [ActionTypes.POST_SEARCH];
const loadingSelector = createLoadingSelector(watchActions);

const mapStateToProps = (state) => ({
  user: state.auth.users?.[state.auth.userId] || {},

  postResults: state.post.results?.reduce((accum, id) => [...accum, state.post.posts?.[id]], []) || [],
  postsLoading: loadingSelector(state),
});

export default connect(mapStateToProps, { postSearch })(Explore);
