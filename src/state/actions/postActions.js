import ActionTypes, {
  getBearerTokenHeader, createAsyncActionCreator,
} from '.';
import { ROOT_URL } from '../../constants';

/**
 * A function for fetching all posts loaded into backend (or a given number based on backend parameters)
 */
export function fetchPosts(additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_POSTS,
    {
      method: 'get',
      url: `${ROOT_URL}/posts`,
    },
    { ...additionalConfig },
  );
}

// New post (AUTH)
export function createPost(content, uid, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_POST,
    {
      method: 'post',
      url: `${ROOT_URL}/posts`,
      data: { content, uid },
      headers: getBearerTokenHeader(),
    },
    { ...additionalConfig },
  );
}

// // TODO: Add additional auth to call this
// // Delete all posts (AUTH)
// export function deleteAllPosts() {
//   return dispatch => new Promise((resolve, reject) => {
//     axios.delete(`${ROOT_URL}/posts`, { timeout: requestTimeout }).then((response) => {
//       resolve();
//     }).catch((error) => {
//       reject();
//     });
//   });
// }

// :id

// Get
export function fetchPostByID(id, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_POST,
    {
      method: 'get',
      url: `${ROOT_URL}/posts/${id}`,
    },
    { ...additionalConfig },
  );
}

// Update (AUTH)
export function updatePostByID(id, update, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_POST,
    {
      method: 'put',
      url: `${ROOT_URL}/posts/${id}`,
      data: update,
      headers: getBearerTokenHeader(),
    },
    { ...additionalConfig },
  );
}

// Delete (AUTH)
export function deletePostByID(id, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.DELETE_POST,
    {
      method: 'delete',
      url: `${ROOT_URL}/posts/${id}`,
      headers: getBearerTokenHeader(),
    },
    {
      additionalPayloadFields: { id },
      ...additionalConfig,
    },
  );
}

export function fetchUserPosts(uid, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.POST_SEARCH,
    {
      method: 'get',
      url: `${ROOT_URL}/posts/user/${uid}`,
      headers: getBearerTokenHeader(),
    },
    { ...additionalConfig },
  );
}

export function likePost(postId, uid = '', additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_POST,
    {
      method: 'post',
      url: `${ROOT_URL}/posts/like/${postId}`,
      data: { uid },
      headers: getBearerTokenHeader(),
    },
    { ...additionalConfig },
  );
}
