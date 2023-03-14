import ReactDOM from 'react-dom/client';
import { CustomHashRouter } from '@utils/customRouter';
import { GlobalContext } from '@hook/globalState';
import { useState } from 'react';

import App from './App';
import './index.less';

const Main = () => {
  const [state, setState] = useState<any>({});
  return (
    <GlobalContext.Provider value={{ initialState: state, setInitialState: setState }}>
      <CustomHashRouter>
        <App />
      </CustomHashRouter>
    </GlobalContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
