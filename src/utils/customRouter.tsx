import { Router } from 'react-router-dom';
import { useRef, useState, useLayoutEffect } from 'react';
import { createHashHistory } from 'history';

export const customHistory = createHashHistory();

/**
 * 为了能在外层使用`history`，所以要自定义hashRouter
 * @param
 * @returns
 */
export function CustomHashRouter({ basename, children }: any) {
  const historyRef = useRef(customHistory);
  if (historyRef.current == null) {
    historyRef.current = customHistory;
  }
  const history = historyRef.current;
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      // eslint-disable-next-line react/no-children-prop
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
}
