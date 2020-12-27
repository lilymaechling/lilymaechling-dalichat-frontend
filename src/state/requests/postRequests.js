import { createBackendAxiosRequest } from '.';
import { getBearerTokenHeader } from '../helpers';

export const fetchPostsRequest = () => {
  return () => createBackendAxiosRequest({
    method: 'get',
    url: '/posts',
  });
};

export const createPostRequest = (content, uid) => {
  return () => createBackendAxiosRequest({
    method: 'post',
    url: '/posts',
    data: { content, uid },
    headers: getBearerTokenHeader(),
  });
};

export const fetchPostByIdRequest = (id) => {
  return () => createBackendAxiosRequest({
    method: 'get',
    url: `/posts/${id}`,
  });
};

export const updatePostByIdRequest = (id, update) => {
  return () => createBackendAxiosRequest({
    method: 'put',
    url: `/posts/${id}`,
    data: update,
    headers: getBearerTokenHeader(),
  });
};

export const deletePostByIdRequest = (id) => {
  return () => createBackendAxiosRequest({
    method: 'delete',
    url: `/posts/${id}`,
    headers: getBearerTokenHeader(),
  });
};

export const fetchUserPostsRequest = (uid) => {
  return () => createBackendAxiosRequest({
    method: 'get',
    url: `/posts/user/${uid}`,
    headers: getBearerTokenHeader(),
  });
};

export const likePostRequest = (postId, uid) => {
  return () => createBackendAxiosRequest({
    method: 'post',
    url: `/posts/like/${postId}`,
    data: { uid },
    headers: getBearerTokenHeader(),
  });
};
