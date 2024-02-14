import { useState } from 'react';

import './main-page-antd-styles.css';
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
import {
    CalendarIconMenu,
    CalendarIconCard,
    ExitIcon,
    ProfileIconMenu,
    ProfileIconCard,
} from '@components/customIcons/customIcons';
import styles from './main-page.module.css';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isMinScreen, setIsMinScreen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Layout>
                <Sider
                    style={{
                        position: isMinScreen ? 'fixed' : 'relative',
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
                    <div
                        className={
                            collapsed ? (isMinScreen ? styles.logo : styles.logoMin) : styles.logo
                        }
                    />
                    <Menu
                        style={{
                            paddingLeft: '2px',
                            padding: '0 0 0 -5px',
                            height: isMinScreen ? 'calc(100vh - 76px)' : 'calc(100vh - 134px)',
                        }}
                        className={styles.menu}
                        theme='light'
                        mode='inline'
                        items={[
                            {
                                key: '1',
                                icon: !isMinScreen && (
                                    <CalendarIconMenu
                                        style={{ color: '#061178', fontSize: '14px' }}
                                    />
                                ),
                                label: 'Календарь',
                                style: {
                                    margin: isMinScreen ? '-10px -10px 20px -11px' : '10px 0 8px 0',
                                    paddingLeft: collapsed ? '22px' : '16px',
                                },
                            },
                            {
                                key: '2',
                                icon: !isMinScreen && (
                                    <HeartFilled style={{ color: '#061178', fontSize: '14px' }} />
                                ),
                                label: 'Тренировки',
                                style: {
                                    margin: isMinScreen ? '-10px -10px 20px -11px' : '10px 0 8px 0',
                                    paddingLeft: collapsed ? '22px' : '16px',
                                },
                            },
                            {
                                key: '3',
                                icon: !isMinScreen && (
                                    <TrophyFilled style={{ color: '#061178', fontSize: '14px' }} />
                                ),
                                label: 'Достижения',
                                style: {
                                    margin: isMinScreen ? '-10px -10px 20px -11px' : '10px 0 8px 0',
                                    paddingLeft: collapsed ? '22px' : '16px',
                                },
                            },
                            {
                                key: '4',
                                icon: !isMinScreen && (
                                    <ProfileIconMenu
                                        style={{ color: '#061178', fontSize: '14px' }}
                                    />
                                ),
                                label: 'Профиль',
                                style: {
                                    margin: isMinScreen ? '-10px -10px 20px -11px' : '10px 0 0 0',
                                    paddingLeft: collapsed ? '22px' : '16px',
                                },
                            },
                            {
                                key: '5',
                                icon: !isMinScreen && (
                                    <ExitIcon
                                        style={{
                                            color: '#061178',
                                            margin: collapsed
                                                ? '2px 12px 0 -2px'
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
                        className={styles.triggerRectangle}
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <div className={styles.trigger}>
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
                    </div>
                </Sider>
                <Layout>
                    <Header>
                        <Breadcrumb>
                            <Breadcrumb.Item>Главная</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className={styles.headerContentWrapper}>
                            <Title>
                                Приветствуем тебя в&#160;CleverFit — приложении,
                                <br />
                                которое&#160;поможет&#160;тебе добиться своей мечты!
                            </Title>
                            <div className={styles.settingsButtonContainer}>
                                <Button type='text'>
                                    <SettingOutlined className={styles.settingsButtonIcon} />
                                    {!isMinScreen && 'Настройки'}
                                </Button>
                            </div>
                        </div>
                    </Header>
                    <Content>
                        <div className={styles.description}>
                            <Title level={5}>
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
                        <div className={styles.subTitle}>
                            <Title level={4}>
                                CleverFit — это не просто приложение, а твой личный помощник
                                в&#160;мире фитнеса. Не откладывай на завтра — начни тренироваться
                                уже сегодня!
                            </Title>
                        </div>
                        <div className={styles.cards}>
                            <Card title='Расписать тренировки' bordered={false}>
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
                        <Button type='text' className={styles.seeReviews}>
                            Смотреть отзывы
                        </Button>
                        <Card bordered={false}>
                            <Meta title='Скачать на телефон ' description='Доступно в PRO-тарифе' />
                            <div className={styles.actions}>
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
