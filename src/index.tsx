import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import { history, store } from '@redux/configure-store';
import { EnterPage, MainPage } from './pages';

import 'normalize.css';
import './index.css';
import 'antd/dist/antd.css';
import { Authorization } from '@components/Authorization/Authorization';
import { Registration } from '@components/Registration/Registration';
import { ResultPage } from '@pages/result-page/resutl-page';
import { ErrorLogin } from '@components/Error-login/Error-login';
import { Success } from '@components/Success/Success';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/auth' element={<EnterPage />}>
                        <Route path='/auth' element={<Authorization />} />
                        <Route path='/auth/registration' element={<Registration />} />
                    </Route>
                    <Route path='/result' element={<ResultPage />}>
                        <Route path='/result/error-login' element={<ErrorLogin />} />
                        <Route path='/result/success' element={<Success />} />
                    </Route>
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>,
);
