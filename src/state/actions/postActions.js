import ActionTypes, {
  getBearerTokenHeader, createAsyncActionCreator,
} from '.';
import { ROOT_URL } from '../../constants';

/**
 * A function for fetching all posts loaded into backend (or a given number based on backend parameters)
 */
export function fetchPosts() {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_POSTS,
    {
      method: 'get',
      url: `${ROOT_URL}/posts`,
    },
  );
}

// New post (AUTH)
export function createPost(title, description, value) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_POST,
    {
      method: 'post',
      url: `${ROOT_URL}/posts`,
      data: { title, description, value },
      headers: getBearerTokenHeader(),
    },
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
export function fetchPostByID(id) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_POST,
    {
      method: 'get',
      url: `${ROOT_URL}/posts/${id}`,
    },
  );
}

// Update (AUTH)
export function updatePostByID(id, update) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.FETCH_POST,
    {
      method: 'put',
      url: `${ROOT_URL}/posts/${id}`,
      data: update,
      headers: getBearerTokenHeader(),
    },
  );
}

// Delete (AUTH)
export function deletePostByID(id) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.DELETE_POST,
    {
      method: 'delete',
      url: `${ROOT_URL}/posts/${id}`,
      headers: getBearerTokenHeader(),
    },
    {
      additionalPayloadFields: { id },
    },
  );
}
