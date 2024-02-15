import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './Authorization.css';

export const Authorization: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name='normal_login'
            className='login-form authorization-form'
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name='username'
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input
                    prefix={<span className='site-form-item-prefix'>e-mail:</span>}
                    placeholder='Username'
                />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input type='password' placeholder='Password' />
            </Form.Item>
            <Form.Item>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <a className='login-form-forgot' href=''>
                    Забыли пароль?
                </a>
            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType='submit' className='login-form-button'>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};
