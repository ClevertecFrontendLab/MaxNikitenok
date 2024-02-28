import { Button, Checkbox, Form, Input } from 'antd';
import './Authorization.css';
import { useAppDispatch } from '@redux/configure-store';
import { postLogin } from '@redux/thunks/post-login';
import { useState } from 'react';
import { postCheckEmail } from '@redux/thunks/post-check-email';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectAuth } from '@redux/auth-slice';

export const Authorization: React.FC = () => {
    const dispatch = useAppDispatch();
    // const navigate = useNavigate();
    // const isAuth = useSelector(selectAuth);

    const onFinish = (values: { email: string; password: string; passwordRep: string }) => {
        const data = { email: values.email, password: values.password };
        console.log('Received values of form: ', values);
        dispatch(postLogin(data));
    };

    // useEffect(() => {
    //     if (localStorage.getItem('accessToken')) {
    //         navigate('/main');
    //     }
    // }, [isAuth, navigate]);

    const regexp =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const [email, setEmail] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const handlePasswordChange = (e: { target: { value: string } }) => {
        const newEmail = e.target.value;

        setIsPasswordValid(regexp.test(newEmail));
        setEmail(newEmail);
    };

    const handleSubmit = () => {
        dispatch(postCheckEmail({ email }));
    };

    return (
        <>
            <Form
                autoComplete='off'
                name='normal_login'
                className='login-form authorization-form'
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name='email'
                    rules={[
                        { required: true, message: 'Пожалуйста введите свой e-mail!' },
                        { type: 'email', message: '' },
                    ]}
                >
                    <Input
                        value={email}
                        onChange={handlePasswordChange}
                        data-test-id='login-email'
                        prefix={<span className='site-form-item-prefix'>e-mail:</span>}
                        placeholder='Username'
                    />
                </Form.Item>
                <Form.Item
                    data-test-id='login-password'
                    name='password'
                    rules={[{ required: true, message: '' }]}
                >
                    <Input.Password placeholder='Password' />
                </Form.Item>
                <Form.Item>
                    <Form.Item name='remember' valuePropName='checked' noStyle>
                        <Checkbox data-test-id='login-remember'>Запомнить меня</Checkbox>
                    </Form.Item>

                    <Button
                        onClick={handleSubmit}
                        disabled={!isPasswordValid}
                        style={{ border: 'none' }}
                        data-test-id='login-forgot-button'
                        className='login-form-forgot'
                    >
                        Забыли пароль?
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Button
                        data-test-id='login-submit-button'
                        type='primary'
                        htmlType='submit'
                        className='login-form-button'
                    >
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
