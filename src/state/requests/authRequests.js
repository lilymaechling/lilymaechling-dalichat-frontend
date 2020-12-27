import { createBackendAxiosRequest } from '.';
import { getBearerTokenHeader } from '../helpers';

export const signUpUserRequest = (email, username, password, firstName, lastName) => {
  return () => createBackendAxiosRequest({
    method: 'post',
    url: '/auth/signup',
    data: {
      email, username, password, firstName, lastName,
    },
  });
};

export const signInUserRequest = (username, password) => {
  return () => createBackendAxiosRequest({
    method: 'post',
    url: '/auth/signin',
    data: { username, password },
  });
};

export const validateUserTokenRequest = () => {
  return () => createBackendAxiosRequest({
    method: 'post',
    url: '/auth/validate',
    data: {},
    headers: getBearerTokenHeader(),
  });
};
