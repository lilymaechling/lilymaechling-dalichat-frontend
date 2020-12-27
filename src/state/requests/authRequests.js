import createAxiosRequest from '.';
import { getBearerTokenHeader } from '../helpers';
import { ROOT_URL } from '../../constants';

export const signUpUserRequest = (email, username, password, firstName, lastName) => {
  return () => createAxiosRequest({
    method: 'post',
    url: `${ROOT_URL}/auth/signup`,
    data: {
      email, username, password, firstName, lastName,
    },
  });
};

export const signInUserRequest = (username, password) => {
  return () => createAxiosRequest({
    method: 'post',
    url: `${ROOT_URL}/auth/signin`,
    data: { username, password },
  });
};

export const validateUserTokenRequest = () => {
  return () => createAxiosRequest({
    method: 'post',
    url: `${ROOT_URL}/auth/validate`,
    data: {},
    headers: getBearerTokenHeader(),
  });
};
