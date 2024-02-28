import { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './Enter-menu.css';
import { useLocation, useNavigate } from 'react-router-dom';

export const EnterMenu: React.FC = () => {
    const location = useLocation();
    const [current, setCurrent] = useState(location.pathname);
    const navigate = useNavigate();

    const items: MenuProps['items'] = [
        {
            label: 'Вход',
            key: '/auth',
        },
        {
            label: 'Регистрация',
            key: '/auth/registration',
        },
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        navigate(e.key);
        setCurrent(e.key);
    };
    return (
        <div className='enter-menu'>
            <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items}></Menu>
        </div>
    );
};
