import omit from 'lodash.omit';
import ActionTypes from '../actions';

const initialState = {
  posts: {},
  results: [],
  numResults: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ActionTypes.SEARCH}_SUCCESS`: // Saves results and total number of results available (before pagination, from server)
      return { ...state, results: action.payload.data.results, numResults: action.payload.data.numResults };
    case `${ActionTypes.FETCH_POST}_SUCCESS`: // Load post into { id: element } mapping
      return { ...state, posts: { ...state.posts, [action.payload.data._id]: action.payload.data } };
    case `${ActionTypes.FETCH_POSTS}_SUCCESS`: // Load post into { id: element } mapping
      return { ...state, posts: { ...state.posts, ...action.payload.data.reduce((accum, e) => ({ ...accum, [e._id]: e }), {}) } };
    case `${ActionTypes.DELETE_POST}_SUCCESS`: // Delete post from state
      return { ...state, posts: omit(state.posts, action.payload.id) };
    default:
      return state;
  }
};

export default reducer;
