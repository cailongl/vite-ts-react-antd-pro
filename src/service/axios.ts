import { message } from 'antd';
import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

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

/**
 * 统一的request 入口
 * @param config {AxiosRequestConfig}
 * @returns {Promise<any>}
 */
export function request(config: AxiosRequestConfig, isShowErrorMsg?: boolean) {
  return new Promise((resolve, reject) => {
    axios(config).then(
      (res: any) => {
        if ([200].includes(res?.code)) {
          resolve(res?.data);
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
