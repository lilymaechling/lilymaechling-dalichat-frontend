import ActionTypes, { createAsyncActionCreator } from '.';
import { ROOT_URL } from '../../constants';

/**
 * A function that searches for posts based on the following parameters:
 * @param {*} query - Search string
 * @param {*} filters - Filters applied - UNIMPLEMENTED
 * @param {*} sort - 'a' -> ascending, 'd' -> descending
 * @param {*} page - Which page of results (calculated in backend) to display?
 * @param {*} numPerPage - How many results should the backend return per query?
 */
export function postSearch({
  query = '', field = '', filters = '', sort = 'a', page = 1, numPerPage = 5,
} = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.POST_SEARCH,
    {
      method: 'get',
      url: `${ROOT_URL}/search/posts?query=${query && query.split(' ').length > 0
        ? query.split(' ').join('+') : query}&field=${field}&filters=${filters}&sort=${sort}&page=${page}&numperpage=${numPerPage}`,
    },
  );
}

/**
 * A function that searches for users based on the following parameters:
 * @param {*} query - Search string
 * @param {*} filters - Filters applied - UNIMPLEMENTED
 * @param {*} sort - 'a' -> ascending, 'd' -> descending
 * @param {*} page - Which page of results (calculated in backend) to display?
 * @param {*} numPerPage - How many results should the backend return per query?
 */
export function userSearch({
  query = '', field = '', filters = '', sort = 'a', page = 1, numPerPage = 100,
} = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.USER_SEARCH,
    {
      method: 'get',
      url: `${ROOT_URL}/search/users?query=${query && query.split(' ').length > 0
        ? query.split(' ').join('+') : query}&field=${field}&filters=${filters}&sort=${sort}&page=${page}&numperpage=${numPerPage}`,
    },
  );
}
