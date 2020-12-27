import axios from 'axios';
import { requestTimeout } from '../../constants';

export default async function createAxiosRequest(config) {
  return axios({ ...config, timeout: requestTimeout });
}
