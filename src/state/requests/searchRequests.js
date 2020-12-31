import { createBackendAxiosRequest } from '.';

export const postSearchRequest = ({
  query, field, filters, sort, page, numPerPage,
}) => () => createBackendAxiosRequest({
  method: 'get',
  url: `/search/posts?query=${query && query.split(' ').length > 0
    ? query.split(' ').join('+') : query}&field=${field}&filters=${filters}&sort=${sort}&page=${page}&numperpage=${numPerPage}`,
});

export const userSearchQuery = ({
  query, field, filters, sort, page, numPerPage,
}) => () => createBackendAxiosRequest({
  method: 'get',
  url: `/search/users?query=${query && query.split(' ').length > 0
    ? query.split(' ').join('+') : query}&field=${field}&filters=${filters}&sort=${sort}&page=${page}&numperpage=${numPerPage}`,
});
