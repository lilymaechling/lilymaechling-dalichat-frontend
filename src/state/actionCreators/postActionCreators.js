import ActionTypes from '../helpers';
import createAsyncActionCreator from '.';

import * as postRequests from '../requests/postRequests';

/**
 * A function for fetching all posts loaded into backend (or a given number based on backend parameters)
 */
export function fetchPosts(additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_POSTS,
    postRequests.fetchPostsRequest(),
    { ...additionalConfig },
  );
}

export function createPost(content, uid, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_POST,
    postRequests.createPostRequest(content, uid),
    { ...additionalConfig },
  );
}

export function fetchPostById(id, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_POST,
    postRequests.fetchPostByIdRequest(id),
    { ...additionalConfig },
  );
}

export function updatePostById(id, update, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_POST,
    postRequests.updatePostByIdRequest(id, update),
    { ...additionalConfig },
  );
}

export function deletePostById(id, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.DELETE_POST,
    postRequests.deletePostByIdRequest(id),
    {
      additionalPayloadFields: { id },
      ...additionalConfig,
    },
  );
}

export function fetchUserPosts(uid, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.POST_SEARCH,
    postRequests.fetchUserPostsRequest(uid),
    { ...additionalConfig },
  );
}

export function likePost(postId, uid, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_POST,
    postRequests.likePostRequest(postId, uid),
    { ...additionalConfig },
  );
}
