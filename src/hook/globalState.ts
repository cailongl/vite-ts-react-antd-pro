// 全局状态
import React, { useContext } from 'react';

export const GlobalContext = React.createContext<any>(null);

export default function useGlobalState() {
  const global = useContext(GlobalContext);
  return global;
}
