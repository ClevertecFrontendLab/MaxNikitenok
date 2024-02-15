import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './Registration.css';

export const Registration: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name='normal_login'
            className='login-form registration-form'
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
                <Input
                    type='password'
                    placeholder='Password'
                />
            </Form.Item>
            <Form.Item
                name='passwordRep'
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    type='passwordRep'
                    placeholder='PasswordRep'
                />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit' className='login-form-button'>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};
