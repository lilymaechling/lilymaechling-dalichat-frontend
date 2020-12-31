import { createBackendAxiosRequest } from '.';
import { getBearerTokenHeader } from '../helpers';

export const fetchUsersRequest = () => () => createBackendAxiosRequest({
  method: 'get',
  url: '/users',
  headers: getBearerTokenHeader(),
});

// * This route is currently not supported by the backend
export const createUserRequest = (firstName, lastName, email, password) => () => createBackendAxiosRequest({
  method: 'post',
  url: '/users',
  data: {
    first_name: firstName, last_name: lastName, email, password,
  },
  headers: getBearerTokenHeader(),
});

export const fetchUserByIdRequest = (uid) => () => createBackendAxiosRequest({
  method: 'get',
  url: `/users/${uid}`,
  headers: getBearerTokenHeader(),
});

export const updateUserByIdRequest = (uid, update) => () => createBackendAxiosRequest({
  method: 'put',
  url: `/users/${uid}`,
  data: update,
  headers: getBearerTokenHeader(),
});

export const deleteUserByIdRequest = (uid) => () => createBackendAxiosRequest({
  method: 'delete',
  url: `/users/${uid}`,
  headers: getBearerTokenHeader(),
});
