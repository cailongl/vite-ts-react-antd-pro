// 兼容umi的导出成员
import useAccessHook from '@hook/useAccess';
import useGlobalState from '@hook/globalState';

// export { useLocation, useMatch, useParams, useNavigate } from 'react-router-dom';
export * from 'react-router-dom';
export { customHistory as history } from '@utils/customRouter';
export { request } from '@service/axios';

export const useModel = useGlobalState;

export const useAccess = useAccessHook;
