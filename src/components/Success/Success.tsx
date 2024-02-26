import { useState } from 'react';
import { Button } from 'antd';
import styles from './Success.module.css';

export const Success: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleAction = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.modalContent}>
            <div className={styles.image}>
                <svg
                    width='71'
                    height='70'
                    viewBox='0 0 71 70'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M35.5 0C16.1719 0 0.5 15.6719 0.5 35C0.5 54.3281 16.1719 70 35.5 70C54.8281 70 70.5 54.3281 70.5 35C70.5 15.6719 54.8281 0 35.5 0ZM50.6172 23.5703L34.1641 46.3828C33.9341 46.7038 33.631 46.9653 33.2797 47.1457C32.9285 47.3261 32.5394 47.4203 32.1445 47.4203C31.7497 47.4203 31.3605 47.3261 31.0093 47.1457C30.6581 46.9653 30.355 46.7038 30.125 46.3828L20.3828 32.8828C20.0859 32.4688 20.3828 31.8906 20.8906 31.8906H24.5547C25.3516 31.8906 26.1094 32.2734 26.5781 32.9297L32.1406 40.6484L44.4219 23.6172C44.8906 22.9687 45.6406 22.5781 46.4453 22.5781H50.1094C50.6172 22.5781 50.9141 23.1562 50.6172 23.5703Z'
                        fill='#52C41A'
                    />
                </svg>
            </div>
            <p className={styles.modalTitle}>Регистрация успешна</p>
            <p className={styles.modalDescription}>
                Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.
            </p>
            <Button type='primary' size='middle' onClick={handleAction}>
                Войти
            </Button>
        </div>
    );
};
