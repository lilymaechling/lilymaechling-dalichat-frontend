import createAxiosRequest from '.';
import { getBearerTokenHeader } from '../helpers';
import { ROOT_URL } from '../../constants';

export const fetchPostsRequest = () => {
  return () => createAxiosRequest({
    method: 'get',
    url: `${ROOT_URL}/posts`,
  });
};

export const createPostRequest = (content, uid) => {
  return () => createAxiosRequest({
    method: 'post',
    url: `${ROOT_URL}/posts`,
    data: { content, uid },
    headers: getBearerTokenHeader(),
  });
};

export const fetchPostByIdRequest = (id) => {
  return () => createAxiosRequest({
    method: 'get',
    url: `${ROOT_URL}/posts/${id}`,
  });
};

export const updatePostByIdRequest = (id, update) => {
  return () => createAxiosRequest({
    method: 'put',
    url: `${ROOT_URL}/posts/${id}`,
    data: update,
    headers: getBearerTokenHeader(),
  });
};

export const deletePostByIdRequest = (id) => {
  return () => createAxiosRequest({
    method: 'delete',
    url: `${ROOT_URL}/posts/${id}`,
    headers: getBearerTokenHeader(),
  });
};

export const fetchUserPostsRequest = (uid) => {
  return () => createAxiosRequest({
    method: 'get',
    url: `${ROOT_URL}/posts/user/${uid}`,
    headers: getBearerTokenHeader(),
  });
};

export const likePostRequest = (postId, uid) => {
  return () => createAxiosRequest({
    method: 'post',
    url: `${ROOT_URL}/posts/like/${postId}`,
    data: { uid },
    headers: getBearerTokenHeader(),
  });
};
