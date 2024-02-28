import { Button } from 'antd';
import styles from './Error-login.module.css';
import { history } from '@redux/configure-store';

export const ErrorLogin: React.FC = () => {
    return (
        <div className={styles.modalContent}>
            <div className={styles.image}>
                <svg
                    width='70'
                    height='62'
                    viewBox='0 0 70 62'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M69.6638 57.875L37.1638 1.625C36.6794 0.789063 35.8435 0.375 34.9997 0.375C34.156 0.375 33.3122 0.789063 32.8357 1.625L0.335659 57.875C-0.625279 59.5469 0.577846 61.625 2.49972 61.625H67.4997C69.4216 61.625 70.6247 59.5469 69.6638 57.875ZM32.4997 23.5C32.4997 23.1562 32.781 22.875 33.1247 22.875H36.8747C37.2185 22.875 37.4997 23.1562 37.4997 23.5V37.875C37.4997 38.2188 37.2185 38.5 36.8747 38.5H33.1247C32.781 38.5 32.4997 38.2188 32.4997 37.875V23.5ZM34.9997 51C34.0184 50.98 33.0841 50.5761 32.3971 49.875C31.7102 49.1739 31.3255 48.2315 31.3255 47.25C31.3255 46.2685 31.7102 45.3261 32.3971 44.625C33.0841 43.9239 34.0184 43.52 34.9997 43.5C35.981 43.52 36.9154 43.9239 37.6023 44.625C38.2892 45.3261 38.6739 46.2685 38.6739 47.25C38.6739 48.2315 38.2892 49.1739 37.6023 49.875C36.9154 50.5761 35.981 50.98 34.9997 51V51Z'
                        fill='#FAAD14'
                    />
                </svg>
            </div>
            <p className={styles.modalTitle}>Вход не выполнен</p>
            <p className={styles.modalDescription}>Что-то пошло не так. Попробуйте еще раз</p>
            <Button data-test-id='login-retry-button' type='primary' size='middle' onClick={() => history.push('/auth')}>
                Повторить
            </Button>
        </div>
    );
};
