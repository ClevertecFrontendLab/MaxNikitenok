import { Button, Form, Input } from 'antd';
import styles from './Change-password.module.css';
import { useAppDispatch } from '@redux/configure-store';
import { postChangePassword } from '@redux/thunks/post-change-password';

export const ChangePassword: React.FC = () => {
    const dispatch = useAppDispatch();
    const regexp = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[^!@#$%^&*(){}_].{7,}/g;
    const onFinish = (values: { password: string; passwordRep: string }) => {
        const data = { password: values.password,  confirmPassword: values.passwordRep};
        console.log('Received values of form: ', values);
        dispatch(postChangePassword(data));
    };

    return (
        <div className={styles.modalContent}>
            <p className={styles.modalTitle}>Восстановление аккауанта</p>
            <Form
                autoComplete='off'
                name='normal_login'
                className='login-form registration-form'
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    help='Пароль не менее 8 латинских букв с заглавной и цифрой'
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
                        data-test-id='change-entry-button'
                        type='primary'
                        htmlType='submit'
                        className='login-form-button'
                    >
                        Сохранить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
