import omit from 'lodash.omit';
import ActionTypes from '../helpers';
import { getCaseSelector } from './helpers';

const initialState = {
  posts: {},
  results: [], // Holds ids for one source of truth in "posts" map
  numResults: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Saves results and total number of results available (before pagination, from server)
    case getCaseSelector(ActionTypes.POST_SEARCH):
      return {
        ...state,
        results: action.payload.data.resultIds,
        numResults: action.payload.data.numResults,
        posts: {
          ...state.posts,
          ...action.payload.data.results.reduce((accum, r) => ({ ...accum, [r._id]: r }), {}),
        },
      };

    // Loads posts from user search request into post state
    case getCaseSelector(ActionTypes.USER_SEARCH):
      return {
        ...state,
        posts: {
          ...state.posts,
          ...action.payload.data.postResults.reduce((accum, r) => ({ ...accum, [r._id]: r }), {}),
        },
      };

    // Load post into { id: element } mapping
    case getCaseSelector(ActionTypes.FETCH_POST):
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.data.post._id]: action.payload.data.post,
        },
      };

    // Load post into { id: element } mapping
    case getCaseSelector(ActionTypes.FETCH_POSTS):
      return {
        ...state,
        posts: {
          ...state.posts,
          ...action.payload.data.posts.reduce((accum, e) => ({ ...accum, [e._id]: e }), {}),
        },
      };

    // Delete post from state
    case getCaseSelector(ActionTypes.DELETE_POST):
      return {
        ...state,
        posts: omit(state.posts, action.payload.id),
        results: state.results.filter((rid) => rid !== action.payload.id),
      };

    case getCaseSelector(ActionTypes.DEAUTH_USER):
      return initialState;

    // Do not handle
    default:
      return state;
  }
};

export default reducer;
