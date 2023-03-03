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

/**
 * 统一的request 入口
 * @param config {AxiosRequestConfig}
 * @returns {Promise<any>}
 */
export function request(url: string, config?: AxiosRequestConfig, isShowErrorMsg?: boolean) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      ...config,
    }).then(
      (res: any) => {
        if ([200, 0].includes(res?.code)) {
          resolve(res);
        } else {
          isShowErrorMsg && message.error(res?.message || DEFAULT_MESSAGE);
          reject(res);
        }
      },
      (error) => {
        isShowErrorMsg && message.error(error?.message || DEFAULT_MESSAGE);
        reject(error);
      },
    );
  });
}
