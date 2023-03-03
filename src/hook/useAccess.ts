import useGlobalState from '@hook/globalState';
import access from '@/access';

export default function useAccess() {
  const { initialState } = useGlobalState();
  return access(initialState);
}
