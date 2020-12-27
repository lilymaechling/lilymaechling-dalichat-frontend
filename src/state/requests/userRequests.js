import { createBackendAxiosRequest } from '.';
import { getBearerTokenHeader } from '../helpers';

export const fetchUsersRequest = () => {
  return () => createBackendAxiosRequest({
    method: 'get',
    url: '/users',
    headers: getBearerTokenHeader(),
  });
};

// * This route is currently not supported by the backend
export const createUserRequest = (firstName, lastName, email, password) => {
  return () => createBackendAxiosRequest({
    method: 'post',
    url: '/users',
    data: {
      first_name: firstName, last_name: lastName, email, password,
    },
    headers: getBearerTokenHeader(),
  });
};

export const fetchUserByIdRequest = (uid) => {
  return () => createBackendAxiosRequest({
    method: 'get',
    url: `/users/${uid}`,
    headers: getBearerTokenHeader(),
  });
};

export const updateUserByIdRequest = (uid, update) => {
  return () => createBackendAxiosRequest({
    method: 'put',
    url: `/users/${uid}`,
    data: update,
    headers: getBearerTokenHeader(),
  });
};

export const deleteUserByIdRequest = (uid) => {
  return () => createBackendAxiosRequest({
    method: 'delete',
    url: `/users/${uid}`,
    headers: getBearerTokenHeader(),
  });
};
