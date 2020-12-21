import omit from 'lodash.omit';
import ActionTypes from '../actions';

const initialState = {
  authenticated: false,
  userId: '', // ID of user signed in
  users: {},
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ActionTypes.USER_SEARCH}_SUCCESS`: // Saves results and total number of results available (before pagination, from server)
      return { ...state, results: action.payload.data.results, numResults: action.payload.data.numResults };
    case `${ActionTypes.FETCH_USER}_SUCCESS`: // Load user into { id: element } mapping
      return { ...state, users: { ...state.users, [action.payload.data._id]: action.payload.data } };
    case `${ActionTypes.FETCH_USERS}_SUCCESS`: // Load users into { id: element } mapping
      return { ...state, users: { ...state.users, ...action.payload.data.reduce((accum, e) => ({ ...accum, [e._id]: e }), {}) } };
    case `${ActionTypes.DELETE_USER}_SUCCESS`: // Delete user from state
      return { ...state, users: omit(state.users, action.payload.id) };

    case `${ActionTypes.AUTH_USER}_SUCCESS`: // Update users if action provides user data
      return {
        ...state, userId: action.payload.data?._id, authenticated: true, users: action.payload.data ? { ...state.users, [action.payload.data._id]: action.payload.data } : state.users,
      };
    case `${ActionTypes.DEAUTH_USER}_SUCCESS`:
      return {
        ...state, authenticated: false, users: {}, userId: '',
      };
    default:
      return state;
  }
};

export default reducer;
