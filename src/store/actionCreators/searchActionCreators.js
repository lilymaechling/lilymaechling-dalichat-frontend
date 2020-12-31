import ActionTypes from '../helpers';
import createAsyncActionCreator from '.';
import * as searchRequests from '../requests/searchRequests';

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
} = {}, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.POST_SEARCH,
    searchRequests.postSearchRequest({
      query, field, filters, sort, page, numPerPage,
    }),
    { ...additionalConfig },
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
} = {}, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.USER_SEARCH,
    searchRequests.userSearchQuery({
      query, field, filters, sort, page, numPerPage,
    }),
    { ...additionalConfig },
  );
}
