import { createBackendAxiosRequest } from '.';
import { getBearerTokenHeader } from '../helpers';

export const fetchPostsRequest = () => () => createBackendAxiosRequest({
  method: 'get',
  url: '/posts',
});

export const createPostRequest = (content, uid) => () => createBackendAxiosRequest({
  method: 'post',
  url: '/posts',
  data: { content, uid },
  headers: getBearerTokenHeader(),
});

export const fetchPostByIdRequest = (id) => () => createBackendAxiosRequest({
  method: 'get',
  url: `/posts/${id}`,
});

export const updatePostByIdRequest = (id, update) => () => createBackendAxiosRequest({
  method: 'put',
  url: `/posts/${id}`,
  data: update,
  headers: getBearerTokenHeader(),
});

export const deletePostByIdRequest = (id) => () => createBackendAxiosRequest({
  method: 'delete',
  url: `/posts/${id}`,
  headers: getBearerTokenHeader(),
});

export const fetchUserPostsRequest = (uid) => () => createBackendAxiosRequest({
  method: 'get',
  url: `/posts/user/${uid}`,
  headers: getBearerTokenHeader(),
});

export const likePostRequest = (postId, uid) => () => createBackendAxiosRequest({
  method: 'post',
  url: `/posts/like/${postId}`,
  data: { uid },
  headers: getBearerTokenHeader(),
});
