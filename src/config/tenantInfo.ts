export const DEFAULT_TENANT_INFO = {
  //租户名称,例：阿里巴巴
  tenantName: '',
  //租户的蓝象企业唯一码
  tenantCode: '',
  //例：GAIA
  platformName: 'GAIA',
  //例：金融级隐私计算平台
  platformSlogan: '金融级隐私计算平台',
  //主页logo地址，例：http://xxx.xx.com/xx.png
  appLogo: undefined,
  //例：GAIA·Cube
  // appName: 'GAIA.Cube',
  //临时隐藏
  appName: 'xxx平台',
  //兼容GAIA技术,显示在主页appName下方
  appSubName: '兼容xxx技术',
  //产品版本号，例:V1.0
  appVersionName: 'V1.0',
  //产品slogan，例：一站式联邦学习建模产品
  appSlogan: '让数据价值高效安全流动',
  //出品方，显示在登录页：例：蓝象智联
  techProvider: '蓝象智联出品',
  // 技术描述
  techDescription: '兼容xxx技术',
  //登录页logo地址, 例：http://xxx.xx.com/xx.png
  appLogoForLogin: '',
  //登录页页脚
  footer: undefined,
  appPolicyUrl: undefined,
  appFavIcon: undefined,
  appContactInfo: undefined,
  customLinks: undefined,
  //login
  loginUrl: undefined,
  redirectUrlParamName: undefined,
  tokenParamName: undefined,
  // 环境变量，是否是数据接入单独部署，如果是，就需要隐藏其他界面，只留数据接入
  isComputionAccessOnly: false,
};
