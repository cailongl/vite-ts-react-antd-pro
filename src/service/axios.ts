import { message } from 'antd';
import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

// axios 文档 https://axios-http.com/zh/docs/req_config

const DEFAULT_MESSAGE = '系统开小差，请稍后再试！';

axios.interceptors.request.use(
  (config) => config,
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    const { response } = error;
    if (response) {
      return Promise.reject(response?.data);
    } else {
      message.error(DEFAULT_MESSAGE);
    }
  },
);

axios.defaults.baseURL = import.meta.env.VITE_PUBLIC_API_PATH;

export type RequestConfig = AxiosRequestConfig & Record<string, any>;

/**
 * 统一的request 入口
 * @param config {AxiosRequestConfig}
 * @returns {Promise<any>}
 */
export function request(url: string, config?: RequestConfig) {
  return axios({
    url,
    ...config,
  });
}
