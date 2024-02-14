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
import { Breadcrumb, Button, Layout, Menu, Typography, Card } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import { CalendarIconMenu, CalendarIconCard, ExitIcon, ProfileIconMenu, ProfileIconCard } from '@components/customIcons/customIcons';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isMinScreen, setIsMinScreen] = useState(false);

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
                    style={{
                        background: '#fff',
                        height: '100vh',
                        position: isMinScreen ? 'fixed' : 'relative',
                        zIndex: 100,
                    }}
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
                    <div className={collapsed ? (isMinScreen ? 'logo' : 'logo-min') : 'logo'} />
                    <Menu
                        style={{
                            paddingLeft: '2px',
                            padding: '0 0 0 -5px',
                            height: isMinScreen ? 'calc(100vh - 76px)' : 'calc(100vh - 134px)',
                        }}
                        className='menu'
                        theme='light'
                        mode='inline'
                        items={[
                            {
                                key: '1',
                                icon: !isMinScreen && (
                                    <CalendarIconMenu style={{ color: '#061178', fontSize: '14px' }} />
                                ),
                                label: 'Календарь',
                                style: {
                                    margin: isMinScreen ? '-10px -10px 20px -19px' : '10px 0 8px 0',
                                },
                            },
                            {
                                key: '2',
                                icon: !isMinScreen && (
                                    <HeartFilled style={{ color: '#061178', fontSize: '14px' }} />
                                ),
                                label: 'Тренировки',
                                style: {
                                    margin: isMinScreen ? '-10px -10px 20px -19px' : '10px 0 8px 0',
                                },
                            },
                            {
                                key: '3',
                                icon: !isMinScreen && (
                                    <TrophyFilled style={{ color: '#061178', fontSize: '14px' }} />
                                ),
                                label: 'Достижения',
                                style: {
                                    margin: isMinScreen ? '-10px -10px 20px -19px' : '10px 0 8px 0',
                                },
                            },
                            {
                                key: '4',
                                icon: !isMinScreen && (
                                    <ProfileIconMenu style={{ color: '#061178', fontSize: '14px' }} />
                                ),
                                label: 'Профиль',
                                style: {
                                    margin: isMinScreen ? '-10px -10px 20px -19px' : '10px 0 0 0',
                                },
                            },
                            {
                                key: '5',
                                icon: !isMinScreen && (
                                    <ExitIcon
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
                                    paddingLeft: isMinScreen ? '28px' : '16px',
                                },
                            },
                        ]}
                    />
                    <div
                        data-test-id={isMinScreen ? 'sider-switch-mobile' : 'sider-switch'}
                        className='trigger-rectangle'
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <div className='trigger'>
                            {collapsed ? (
                                <MenuUnfoldOutlined
                                    style={{ color: 'var(--character-light-secondary-45)' }}
                                />
                            ) : (
                                <MenuFoldOutlined
                                    style={{ color: 'var(--character-light-secondary-45)' }}
                                />
                            )}
                        </div>
                        , ,
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
                                Приветствуем тебя в&#160;CleverFit — приложении,
                                <br />
                                которое&#160;поможет&#160;тебе добиться своей мечты!
                            </Title>
                            <div className='settings-button-container'>
                                <Button type='text'>
                                    <SettingOutlined className='settings-button-icon' />
                                    {!isMinScreen && 'Настройки'}
                                </Button>
                            </div>
                        </div>
                    </Header>
                    <Content>
                        <div className='description'>
                            <Title
                                level={5}
                                style={{
                                    lineHeight: '131%',
                                    letterSpacing: -0.15,
                                    marginBottom: 0,
                                }}
                            >
                                С CleverFit ты сможешь: <br />— планировать свои тренировки
                                на&#160;календаре, выбирая тип и&#160;уровень нагрузки; <br />—
                                отслеживать свои достижения в&#160;разделе статистики, сравнивая
                                свои результаты с&#160;нормами и&#160;рекордами; <br />— создавать
                                свой профиль, где ты&#160;можешь загружать свои фото, видео и отзывы
                                о&#160;тренировках; <br />— выполнять расписанные тренировки для
                                разных частей тела, следуя подробным инструкциям и&#160;советам
                                профессиональных тренеров.
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
         
                            >
                                <HeartFilled
                                    style={{
                                        color: 'color: var(--primary-light-6)',
                                        fontSize: '13px',
                                    }}
                                />
                                <span>Тренировки</span>
                            </Card>
                            <Card title='Назначить календарь' bordered={false}>
                                <CalendarIconCard />
                                <span>Календарь</span>
                            </Card>
                            <Card title='Заполнить профиль' bordered={false}>
                                <ProfileIconCard />
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
