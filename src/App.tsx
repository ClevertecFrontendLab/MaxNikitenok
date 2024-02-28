import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import { history } from '@redux/configure-store';
import { EnterPage, MainPage } from './pages';

import 'normalize.css';
import './index.css';
import 'antd/dist/antd.css';
import { Authorization } from '@components/Authorization/Authorization';
import { Registration } from '@components/Registration/Registration';
import { ResultPage } from '@pages/result-page/resutl-page';
import { ErrorLogin } from '@components/Error-login/Error-login';
import { Success } from '@components/Success/Success';
import { ErrorRegister } from '@components/Error-register/Error-register';
import { Loader } from '@components/Loader/Loader';
import { selectLoading } from '@redux/auth-slice';
import { ErrorCheckEmailNoExist } from '@components/Error-check-email-no-exist/Error-check-email-no-exist';
import { ErrorChangePassword } from '@components/Error-change-password/Error-change-password';
import { SuccessChangePassword } from '@components/Success-change-password/Success-change-password';
import { ErrorUserExist } from '@components/Error-user-exist/Error-user-exist';
import { ErrorCheckEmail } from '@components/Error-check-email/Error-check-email';
import { ConfirmEmail } from '@components/Confirm-email/Confirm-email';
import { ChangePassword } from '@components/Change-password/Change-password';

export const App = () => {
    const isLoading = useSelector(selectLoading);

    return (
        <>
            <Router history={history}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/main' element={<MainPage />} />
                    <Route path='/auth' element={<EnterPage />}>
                        <Route path='/auth' element={<Authorization />} />
                        <Route path='/auth/registration' element={<Registration />} />
                        <Route path='/auth/change-password' element={<ChangePassword />} />
                    </Route>
                    <Route path='/auth/confirm-email' element={<ConfirmEmail />} />

                    <Route path='/result' element={<ResultPage />}>
                        <Route path='/result/success' element={<Success />} />

                        <Route path='/result/error' element={<ErrorRegister />} />
                        <Route path='/result/error-login' element={<ErrorLogin />} />
                        <Route path='/result/error-user-exist' element={<ErrorUserExist />} />
                        <Route path='/result/error-check-email' element={<ErrorCheckEmail />} />
                        <Route
                            path='/result/error-check-email-no-exist'
                            element={<ErrorCheckEmailNoExist />}
                        />
                        <Route
                            path='/result/error-change-password'
                            element={<ErrorChangePassword />}
                        />
                    </Route>
                    <Route
                            path='/result/success-change-password'
                            element={<SuccessChangePassword />}
                        />
                </Routes>
            </Router>
            {isLoading && <Loader />}
        </>
    );
};
