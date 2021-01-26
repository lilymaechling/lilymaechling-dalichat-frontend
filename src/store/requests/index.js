import axios from 'axios';
import { requestTimeout, BACKEND_URL } from '../../utils';

const backendAxiosInstance = axios.create({
  baseURL: BACKEND_URL,
  timeout: requestTimeout,
});

// eslint-disable-next-line import/prefer-default-export
export async function createBackendAxiosRequest(config) {
  return backendAxiosInstance(config);
}
