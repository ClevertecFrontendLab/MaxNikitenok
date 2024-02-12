import React, { useState } from 'react';

import './main-page.css';
import {
    AndroidFilled,
    AppleFilled,
    HeartFilled,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu } from 'antd';

import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { Typography } from 'antd';
import { Card } from 'antd';
import { Footer } from 'antd/lib/layout/layout';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isMinScreen, setIsMinScreen] = useState(false);

    const CalendarSvg = () => (
        <svg
            width='13'
            height='13'
            viewBox='0 0 13 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M9.375 1.125H12C12.2766 1.125 12.5 1.34844 12.5 1.625V12C12.5 12.2766 12.2766 12.5 12 12.5H0.5C0.223437 12.5 0 12.2766 0 12V1.625C0 1.34844 0.223437 1.125 0.5 1.125H3.125V0.125C3.125 0.05625 3.18125 0 3.25 0H4.125C4.19375 0 4.25 0.05625 4.25 0.125V1.125H8.25V0.125C8.25 0.05625 8.30625 0 8.375 0H9.25C9.31875 0 9.375 0.05625 9.375 0.125V1.125ZM1.125 11.375H11.375V5.4375H1.125V11.375Z'
                fill='#061178'
            />
        </svg>
    );
    const CalendarIcon = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={CalendarSvg} {...props} />
    );

    const ProfileSvg = () => (
        <svg
            width='13'
            height='13'
            viewBox='0 0 13 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M12 0H0.5C0.223438 0 0 0.223438 0 0.5V12C0 12.2766 0.223438 12.5 0.5 12.5H12C12.2766 12.5 12.5 12.2766 12.5 12V0.5C12.5 0.223438 12.2766 0 12 0ZM11.375 11.375H1.125V1.125H11.375V11.375ZM9.71391 5.6875H7.78578C7.76547 5.6875 7.74985 5.63125 7.74985 5.5625V4.8125C7.74985 4.74375 7.76547 4.6875 7.78578 4.6875H9.71391C9.73422 4.6875 9.74985 4.74375 9.74985 4.8125V5.5625C9.74985 5.63125 9.73422 5.6875 9.71391 5.6875ZM10.7623 7.9375H7.86078C7.79985 7.9375 7.74985 7.88125 7.74985 7.8125V7.0625C7.74985 6.99375 7.79985 6.9375 7.86078 6.9375H10.7623C10.8233 6.9375 10.8733 6.99375 10.8733 7.0625V7.8125C10.8733 7.88125 10.8233 7.9375 10.7623 7.9375ZM2.43578 8.76562H1.74985C1.67797 8.76562 1.62172 8.70625 1.62797 8.63437C1.64885 8.23627 1.76577 7.84914 1.96875 7.50603C2.17173 7.16293 2.45473 6.87405 2.7936 6.66406C2.51078 6.35156 2.33891 5.93906 2.33891 5.48438C2.33891 4.51719 3.1186 3.73438 4.07953 3.73438C5.04047 3.73438 5.82016 4.51719 5.82016 5.48438C5.8212 5.92058 5.65901 6.34139 5.36547 6.66406C6.0311 7.07656 6.48735 7.80156 6.5311 8.63437C6.53194 8.65131 6.52934 8.66824 6.52344 8.68413C6.51754 8.70003 6.50846 8.71455 6.49677 8.72683C6.48508 8.73911 6.47101 8.74888 6.45542 8.75555C6.43983 8.76222 6.42305 8.76565 6.4061 8.76562H5.72016C5.65453 8.76562 5.60141 8.71406 5.59672 8.64844C5.53735 7.85938 4.87797 7.23438 4.07797 7.23438C3.27797 7.23438 2.6186 7.85938 2.55922 8.64844C2.55453 8.71406 2.50141 8.76562 2.43578 8.76562Z'
                fill='#061178'
            />
        </svg>
    );
    const ProfileIcon = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={ProfileSvg} {...props} />
    );

    const ExitSvg = () => (
        <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M3.74621 7.39397V5.86897C3.74621 5.80112 3.66943 5.76183 3.61585 5.80469L0.919425 7.93683C0.90984 7.94439 0.902093 7.95402 0.896766 7.965C0.891439 7.97598 0.888672 7.98802 0.888672 8.00022C0.888672 8.01243 0.891439 8.02447 0.896766 8.03545C0.902093 8.04643 0.90984 8.05606 0.919425 8.06362L3.61585 10.1975C3.66764 10.2386 3.74621 10.2011 3.74621 10.1333V8.60826H10.6664V7.39397H3.74621Z'
                fill='black'
            />
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M4.62716 0.929688H14.0474C14.3242 0.929688 14.5474 1.1529 14.5474 1.42969V14.5725C14.5474 14.8493 14.3242 15.0725 14.0474 15.0725H4.62716C4.35038 15.0725 4.12716 14.8493 4.12716 14.5725V11.5725C4.12716 11.5333 4.15931 11.5011 4.19859 11.5011H5.27002C5.30931 11.5011 5.34145 11.5333 5.34145 11.5725V13.8583H13.3331V8.60826V7.39397V2.14397H5.34145V4.42969C5.34145 4.46897 5.30931 4.50112 5.27002 4.50112H4.19859C4.15931 4.50112 4.12716 4.46897 4.12716 4.42969V1.42969C4.12716 1.1529 4.35038 0.929688 4.62716 0.929688Z'
                fill='black'
            />
        </svg>
    );
    const ExitIcon = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={ExitSvg} {...props} />
    );

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
                    style={{ background: '#fff', height: '100vh', position: isMinScreen ? 'absolute' : 'relative', zIndex: 100}}
                    collapsedWidth={isMinScreen ? 0 : 64}
                    width={isMinScreen ? 106 : 208}
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    breakpoint='md'
                    onBreakpoint={(broken) => {
                        setIsMinScreen(broken);
                      }}
                   >
                    <div className={collapsed ? 'logo-min' : 'logo'} />
                    <Menu
                        style={{
                            paddingLeft: '2px',
                        }}
                        className='menu'
                        theme='light'
                        // mode='inline'
                        // defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: (
                                    !isMinScreen && <CalendarIcon style={{ color: '#061178', fontSize: '14px' }} />
                                ),
                                label: 'Календарь',
                                style: { marginTop: 10 },
                            },
                            {
                                key: '2',
                                icon: (
                                    !isMinScreen && <HeartFilled style={{ color: '#061178', fontSize: '14px' }} />
                                ),
                                label: 'Тренировки',
                                style: { marginTop: 10 },
                            },
                            {
                                key: '3',
                                icon: (
                                    !isMinScreen && <TrophyFilled style={{ color: '#061178', fontSize: '14px' }} />
                                ),
                                label: 'Достижения',
                                style: { marginTop: 10 },
                            },
                            {
                                key: '4',
                                icon: (
                                    !isMinScreen && <ProfileIcon style={{ color: '#061178', fontSize: '14px' }} />
                                ),
                                label: 'Профиль',
                                style: { marginTop: 10 },
                            },
                            {
                                key: '5',
                                icon: (
                                    !isMinScreen && <ExitIcon
                                        style={{
                                            color: '#061178',
                                            margin: collapsed
                                                ? '3px 12px 0 -10px'
                                                : '2px 12px 0 -2px',
                                            alignItems: 'center',
                                        }}
                                    />
                                ),
                                label: 'Выход',
                                style: {
                                    marginTop: 'auto',
                                    height: 38,
                                    borderTop: '1px solid var(--character-light-dividers)',
                                },
                            },
                        ]}
                    />
                    <div
                        data-test-id='sider-switch'
                        className='trigger-rectangle'
                        onClick={() => setCollapsed(!collapsed)}
                    >
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
                    <Header>
                        <Breadcrumb
                            style={{
                                margin: '14px 0 0 24px',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '130%',
                                color: '#262626',
                            }}
                        >
                            <Breadcrumb.Item>Главная</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className='header-content-wrapper'>
                            <Title>
                                Приветствуем тебя в CleverFit — приложении,
                                которое&#160;поможет&#160;тебе&#160;добиться своей мечты!
                            </Title>
                            <div className='settings-button-container'>
                                <Button type='text'>
                                    <SettingOutlined className='settings-button-icon' />
                                    Настройки
                                </Button>
                            </div>
                        </div>
                    </Header>
                    <Content
                        style={{
                            padding: 24,
                            minHeight: 280,
                            background: 'transparent',
                        }}
                    >
                        <div className='description'>
                            <Title
                                level={5}
                                style={{
                                    lineHeight: '131%',
                                    letterSpacing: -0.15,
                                    marginBottom: 0,
                                }}
                            >
                                С CleverFit ты сможешь: <br />— планировать свои тренировки на
                                календаре, выбирая тип и&#160;уровень нагрузки; <br />— отслеживать
                                свои достижения в разделе статистики, сравнивая свои результаты
                                с&#160;нормами и рекордами; <br />— создавать свой профиль, где ты
                                можешь загружать свои фото, видео и отзывы о&#160;тренировках;{' '}
                                <br />— выполнять расписанные тренировки для разных частей тела,
                                следуя подробным инструкциям и советам профессиональных тренеров.
                            </Title>
                        </div>
                        <div className='sub-title'>
                            <Title
                                level={4}
                                style={{ lineHeight: '131%', letterSpacing: -0.1, marginBottom: 0 }}
                            >
                                CleverFit — это не просто приложение, а твой личный помощник
                                в&#160;мире фитнеса. Не откладывай на завтра — начни тренироваться
                                уже сегодня!
                            </Title>
                        </div>
                        <div className='cards'>
                            <Card
                                title='Расписать тренировки'
                                bordered={false}
                                // style={{ maxWidth: 240, height: 101 }}
                            >
                                <HeartFilled style={{ color: '#061178', fontSize: '13px' }} />
                                <span>Тренировки</span>
                            </Card>
                            <Card
                                title='Назначить календарь'
                                bordered={false}
                                // style={{ maxWidth: 240, height: 101 }}
                            >
                                <CalendarIcon style={{ color: '#061178', fontSize: '10px' }} />
                                <span>Календарь</span>
                            </Card>
                            <Card
                                title='Заполнить профиль'
                                bordered={false}
                                // style={{ maxWidth: 240, height: 101 }}
                            >
                                <ProfileIcon style={{ color: '#061178', fontSize: '10px' }} />
                                <span>Профиль</span>
                            </Card>
                        </div>
                    </Content>
                    <Footer style={{ background: 'transparent' }}>
                        <Button type='text' className='see-reviews'>
                            Смотреть отзывы
                        </Button>
                        <Card bordered={false}>
                            <Meta title='Скачать на телефон ' description='Доступно в PRO-тарифе' />
                            <div className='actions'>
                                <Button type='text'>
                                    <AndroidFilled />
                                    <span>Android OS</span>
                                </Button>
                                <Button type='text'>
                                    <AppleFilled />
                                    <span>Apple iOS</span>
                                </Button>
                            </div>
                        </Card>
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
};
