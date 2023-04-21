import ReactDOM from 'react-dom/client';
import { PageLoading } from '@ant-design/pro-components';
import { CustomHashRouter } from '@utils/customRouter';
import { GlobalContext } from '@hook/globalState';
import { useLayoutEffect, useState } from 'react';
import Layout from '@components/Layout';
import { getInitialState } from '@config/initialState';

import './index.less';

const Main = () => {
  const [state, setState] = useState<any>();
  useLayoutEffect(() => {
    getInitialState().then((res) => {
      setState(res);
    });
  }, []);
  return (
    <GlobalContext.Provider value={{ initialState: state, setInitialState: setState }}>
      <CustomHashRouter>{state ? <Layout /> : <PageLoading />}</CustomHashRouter>
    </GlobalContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
