import { Button, Form, Input } from 'antd';
import './Registration.css';
import { postRegister } from '@redux/thunks/post-register';
import { useAppDispatch } from '@redux/configure-store';
import { setRegisterData } from '@redux/auth-slice';

export const Registration: React.FC = () => {
    const dispatch = useAppDispatch();


    const onFinish = (values: { email: string; password: string; passwordRep: string }) => {
        const data = { email: values.email, password: values.password };
        dispatch(postRegister(data));
        dispatch(setRegisterData(data));
    };

    const regexp = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[^!@#$%^&*(){}_].{7,}/g;

    return (
        <Form
            autoComplete='off'
            name='normal_login'
            className='login-form registration-form'
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name='email'
                rules={[
                    { required: true, message: '' },
                    { type: 'email', message: '' },
                ]}
            >
                <Input
                    autoComplete='off'
                    data-test-id='registration-email'
                    prefix={<span className='site-form-item-prefix'>e-mail:</span>}
                    placeholder='Username'
                />
            </Form.Item>
            <Form.Item
                help="Пароль не менее 8 латинских букв с заглавной и цифрой"
                name='password'
                rules={[
                    { required: true, message: '' },
                    {
                        pattern: regexp,
                        message: 'Пароль не менее 8 латинских букв с заглавной и цифрой',
                    },
                ]}
            >
                <Input.Password
                    data-test-id='registration-password'
                    type='password'
                    placeholder='Password'
                />
            </Form.Item>
            <Form.Item
                name='passwordRep'
                rules={[
                    { required: true, message: '' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('Пароли не совпадают');
                        },
                    }),
                ]}
            >
                <Input.Password
                    data-test-id='registration-confirm-password'
                    type='passwordRep'
                    placeholder='PasswordRep'
                />
            </Form.Item>
            <Form.Item>
                <Button
                    data-test-id='registration-submit-button'
                    type='primary'
                    htmlType='submit'
                    className='login-form-button'
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};
