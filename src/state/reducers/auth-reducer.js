import omit from 'lodash.omit';
import ActionTypes from '../actions';
import { getCaseSelector } from './helpers';

const initialState = {
  authenticated: false,
  userId: '', // ID of user signed in
  users: {},
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Saves results and total number of results available (before pagination, from server)
    case getCaseSelector(ActionTypes.USER_SEARCH):
      return {
        ...state,
        results: action.payload.data.resultIds,
        numResults: action.payload.data.numResults,
        users: {
          ...state.users,
          ...action.payload.data.results.reduce((accum, r) => ({ ...accum, [r._id]: r }), {}),
        },
      };

    // Load user into { id: element } mapping
    case getCaseSelector(ActionTypes.FETCH_USER):
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload.data._id]: action.payload.data,
        },
      };

    // Load users into { id: element } mapping
    case getCaseSelector(ActionTypes.FETCH_USERS):
      return {
        ...state,
        users: {
          ...state.users,
          ...action.payload.data.reduce((accum, e) => ({ ...accum, [e._id]: e }), {}),
        },
      };

    // Delete user from state
    case getCaseSelector(ActionTypes.DELETE_USER):
      return {
        ...state,
        users: omit(state.users, action.payload.id),
      };

    // Update users if action provides user data
    case getCaseSelector(ActionTypes.AUTH_USER):
      return {
        ...state,
        authenticated: true,
        userId: action.payload.data?._id,
        users: action.payload.data ? {
          ...state.users,
          [action.payload.data._id]: action.payload.data,
        } : state.users,
      };

    // Remove all personalized information from store
    case getCaseSelector(ActionTypes.DEAUTH_USER):
      return initialState;

    // Do not handle
    default:
      return state;
  }
};

export default reducer;
