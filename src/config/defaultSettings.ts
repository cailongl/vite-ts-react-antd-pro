import type { Settings as LayoutSettings } from '@ant-design/pro-layout';

const { VITE_PUBLIC_RES_PATH, VITE_PUBLIC_API_PATH } = import.meta.env;

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
  // tenantInfo?: TenantInfo;
  endpoint?: any;
  extraInfo?: any;
  enableCustomTheme?: any;
  featureConfig?: any;
  urlConfig?: any;
  extraConfig?: any;
  uiConfig?: any;
  apiPrefix: string;
  resPrefix: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  contentWidth: 'Fluid',
  title: 'GAIA',
  // logo: '',
  iconfontUrl: `${VITE_PUBLIC_RES_PATH}/iconfont/iconfont.js`,
  // tenantInfo: DEFAULT_TENANT_INFO,
  enableCustomTheme: true,
  apiPrefix: VITE_PUBLIC_API_PATH,
  resPrefix: VITE_PUBLIC_RES_PATH,
  endpoint: {},
  extraInfo: {},
};

export default Settings;
