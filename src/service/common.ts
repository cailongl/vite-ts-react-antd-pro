import { request } from './axios';

/**
 * 获取配置后，初始化租户，项目配置等信息
 * @param params
 */
export async function getVerifyConfig() {
  return request('/omega/api/verify/config');
}


/**
 * 获取当前用户信息
 * @param params
 */
export async function getCurrentUser() {
  return request('/omega/mgmt/users/current');
}
