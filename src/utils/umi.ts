// 兼容umi的导出成员
import { createHashHistory } from 'history';
import { request as axiosRequest } from '@service/axios';
import useAccessHook from '@hook/useAccess';
import useGlobalState from '@hook/globalState';

import { useLocation as useLocationRM } from 'react-router-dom';

export const useModel = useGlobalState;

export const history = createHashHistory({ window });

export const request = axiosRequest;

export const useAccess = useAccessHook;

export const useLocation = useLocationRM;
