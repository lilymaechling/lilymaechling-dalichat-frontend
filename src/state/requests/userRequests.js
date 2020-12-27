import createAxiosRequest from '.';
import { getBearerTokenHeader } from '../helpers';
import { ROOT_URL } from '../../constants';

export const fetchUsersRequest = () => {
  return () => createAxiosRequest({
    method: 'get',
    url: `${ROOT_URL}/users`,
    headers: getBearerTokenHeader(),
  });
};

// * This route is currently not supported by the backend
export const createUserRequest = (firstName, lastName, email, password) => {
  return () => createAxiosRequest({
    method: 'post',
    url: `${ROOT_URL}/users`,
    data: {
      first_name: firstName, last_name: lastName, email, password,
    },
    headers: getBearerTokenHeader(),
  });
};

export const fetchUserByIdRequest = (uid) => {
  return () => createAxiosRequest({
    method: 'get',
    url: `${ROOT_URL}/users/${uid}`,
    headers: getBearerTokenHeader(),
  });
};

export const updateUserByIdRequest = (uid, update) => {
  return () => createAxiosRequest({
    method: 'put',
    url: `${ROOT_URL}/users/${uid}`,
    data: update,
    headers: getBearerTokenHeader(),
  });
};

export const deleteUserByIdRequest = (uid) => {
  return () => createAxiosRequest({
    method: 'delete',
    url: `${ROOT_URL}/users/${uid}`,
    headers: getBearerTokenHeader(),
  });
};
