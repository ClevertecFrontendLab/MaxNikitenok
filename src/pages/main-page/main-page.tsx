import React, { useState } from 'react';

import './main-page.css';
import {
    HeartFilled,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

const CalendarIcon = () => (
    <svg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M9.375 1.125H12C12.2766 1.125 12.5 1.34844 12.5 1.625V12C12.5 12.2766 12.2766 12.5 12 12.5H0.5C0.223437 12.5 0 12.2766 0 12V1.625C0 1.34844 0.223437 1.125 0.5 1.125H3.125V0.125C3.125 0.05625 3.18125 0 3.25 0H4.125C4.19375 0 4.25 0.05625 4.25 0.125V1.125H8.25V0.125C8.25 0.05625 8.30625 0 8.375 0H9.25C9.31875 0 9.375 0.05625 9.375 0.125V1.125ZM1.125 11.375H11.375V5.4375H1.125V11.375Z'
            fill='#061178'
        />
    </svg>
);
const ProfileIcon = () => (
    <svg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M12 0H0.5C0.223438 0 0 0.223438 0 0.5V12C0 12.2766 0.223438 12.5 0.5 12.5H12C12.2766 12.5 12.5 12.2766 12.5 12V0.5C12.5 0.223438 12.2766 0 12 0ZM11.375 11.375H1.125V1.125H11.375V11.375ZM9.71391 5.6875H7.78578C7.76547 5.6875 7.74985 5.63125 7.74985 5.5625V4.8125C7.74985 4.74375 7.76547 4.6875 7.78578 4.6875H9.71391C9.73422 4.6875 9.74985 4.74375 9.74985 4.8125V5.5625C9.74985 5.63125 9.73422 5.6875 9.71391 5.6875ZM10.7623 7.9375H7.86078C7.79985 7.9375 7.74985 7.88125 7.74985 7.8125V7.0625C7.74985 6.99375 7.79985 6.9375 7.86078 6.9375H10.7623C10.8233 6.9375 10.8733 6.99375 10.8733 7.0625V7.8125C10.8733 7.88125 10.8233 7.9375 10.7623 7.9375ZM2.43578 8.76562H1.74985C1.67797 8.76562 1.62172 8.70625 1.62797 8.63437C1.64885 8.23627 1.76577 7.84914 1.96875 7.50603C2.17173 7.16293 2.45473 6.87405 2.7936 6.66406C2.51078 6.35156 2.33891 5.93906 2.33891 5.48438C2.33891 4.51719 3.1186 3.73438 4.07953 3.73438C5.04047 3.73438 5.82016 4.51719 5.82016 5.48438C5.8212 5.92058 5.65901 6.34139 5.36547 6.66406C6.0311 7.07656 6.48735 7.80156 6.5311 8.63437C6.53194 8.65131 6.52934 8.66824 6.52344 8.68413C6.51754 8.70003 6.50846 8.71455 6.49677 8.72683C6.48508 8.73911 6.47101 8.74888 6.45542 8.75555C6.43983 8.76222 6.42305 8.76565 6.4061 8.76562H5.72016C5.65453 8.76562 5.60141 8.71406 5.59672 8.64844C5.53735 7.85938 4.87797 7.23438 4.07797 7.23438C3.27797 7.23438 2.6186 7.85938 2.55922 8.64844C2.55453 8.71406 2.50141 8.76562 2.43578 8.76562Z'
            fill='#061178'
        />
    </svg>
);

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className='wrapper'>
            <Layout
                style={{
                    minHeight: '100vh',
                    maxWidth: '1440px',
                    background: 'transparent',
                    margin: '0 auto',
                }}
            >
                <Sider
                    style={{ background: '#fff', position: 'relative' }}
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                >
                    <div className='logo' />
                    <Menu
                        style={{height: 244 ,display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: 'none', background: '#fff' }}
                        theme='light'
                        // mode='inline'
                        // defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: CalendarIcon(),
                                label: 'Календарь',
                            },
                            {
                                key: '2',
                                icon: <HeartFilled style={{ color: '#061178' }} />,
                                label: 'Тренировки',
                            },
                            {
                                key: '3',
                                icon: <TrophyFilled style={{ color: '#061178' }} />,
                                label: 'Достижения',
                            },
                            {
                                key: '4',
                                icon: ProfileIcon(),
                                label: 'Профиль',
                            },
                        ]}
                    />
                    <div className='trigger-rectangle' onClick={() => setCollapsed(!collapsed)}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                        })}
                    </div>
                </Sider>
                <Layout
                    style={{
                        background: 'transparent',
                    }}
                >
                    <Header style={{ padding: 0, background: '#f0f5ff' }}>Header</Header>
                    <Content
                        style={{
                            padding: 24,
                            minHeight: 280,
                            background: 'transparent',
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};
