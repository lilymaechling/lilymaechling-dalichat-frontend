import ActionTypes from '../helpers';
import createAsyncActionCreator from '.';
import * as userRequests from '../requests/userRequests';

// Get all users (AUTH)
export function fetchUsers(additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_USERS,
    userRequests.fetchUsersRequest(),
    { ...additionalConfig },
  );
}

// New user (AUTH)
export function createUser(firstName, lastName, email, password, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_USER,
    userRequests.createUserRequest(firstName, lastName, email, password),
    { ...additionalConfig },
  );
}

// Get user by id (AUTH)
export function fetchUserById(uid, additionalConfig = {}) {
  return (dispatch) => {
    if (!uid) {
      return dispatch({ type: `${ActionTypes.FETCH_USER}_SUCCESS`, payload: {} });
    } else {
      return createAsyncActionCreator(
        dispatch, ActionTypes.FETCH_USER,
        userRequests.fetchUserByIdRequest(uid),
        { ...additionalConfig },
      );
    }
  };
}

// Update by id (AUTH)
export function updateUserById(uid, update = {}, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_USER,
    userRequests.updateUserByIdRequest(uid, update),
    { ...additionalConfig },
  );
}

// Delete by id (AUTH)
export function deleteUserById(uid, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.DELETE_USER,
    userRequests.deleteUserByIdRequest(uid),
    {
      additionalPayloadFields: { uid },
      ...additionalConfig,
    },
  );
}
