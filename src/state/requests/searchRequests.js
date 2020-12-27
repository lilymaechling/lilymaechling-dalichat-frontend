import createAxiosRequest from '.';
import { ROOT_URL } from '../../constants';

export const postSearchRequest = ({
  query, field, filters, sort, page, numPerPage,
}) => {
  return () => createAxiosRequest({
    method: 'get',
    url: `${ROOT_URL}/search/posts?query=${query && query.split(' ').length > 0
      ? query.split(' ').join('+') : query}&field=${field}&filters=${filters}&sort=${sort}&page=${page}&numperpage=${numPerPage}`,
  });
};

export const userSearchQuery = ({
  query, field, filters, sort, page, numPerPage,
}) => {
  return () => createAxiosRequest({
    method: 'get',
    url: `${ROOT_URL}/search/users?query=${query && query.split(' ').length > 0
      ? query.split(' ').join('+') : query}&field=${field}&filters=${filters}&sort=${sort}&page=${page}&numperpage=${numPerPage}`,
  });
};
