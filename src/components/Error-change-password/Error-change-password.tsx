import { Button } from 'antd';
import styles from './Error-change-password.module.css';
import { history, useAppDispatch } from '@redux/configure-store';
import { postChangePassword } from '@redux/thunks/post-change-password';
import { useSelector } from 'react-redux';
import { selectChangePassData } from '@redux/auth-slice';

export const ErrorChangePassword: React.FC = () => {
    const dispatch = useAppDispatch();
    const changePassData = useSelector(selectChangePassData);
    return (
        <div className={styles.modalContent}>
            <div className={styles.image}>
                <svg
                    width='71'
                    height='71'
                    viewBox='0 0 71 71'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M35.4443 0.944336C16.1162 0.944336 0.444336 16.6162 0.444336 35.9443C0.444336 55.2725 16.1162 70.9443 35.4443 70.9443C54.7725 70.9443 70.4443 55.2725 70.4443 35.9443C70.4443 16.6162 54.7725 0.944336 35.4443 0.944336ZM48.3662 49.2412L43.21 49.2178L35.4443 39.96L27.6865 49.21L22.5225 49.2334C22.1787 49.2334 21.8975 48.96 21.8975 48.6084C21.8975 48.46 21.9521 48.3193 22.0459 48.2021L32.21 36.0928L22.0459 23.9912C21.9515 23.8767 21.8991 23.7334 21.8975 23.585C21.8975 23.2412 22.1787 22.96 22.5225 22.96L27.6865 22.9834L35.4443 32.2412L43.2021 22.9912L48.3584 22.9678C48.7021 22.9678 48.9834 23.2412 48.9834 23.5928C48.9834 23.7412 48.9287 23.8818 48.835 23.999L38.6865 36.1006L48.8428 48.21C48.9365 48.3271 48.9912 48.4678 48.9912 48.6162C48.9912 48.96 48.71 49.2412 48.3662 49.2412Z'
                        fill='#FF4D4F'
                    />
                </svg>
            </div>
            <p className={styles.modalTitle}>Данные не сохранились</p>
            <p className={styles.modalDescription}>Что-то пошло не так. Попробуйте ещё раз</p>
            <Button
                data-test-id='change-retry-button'
                type='primary'
                size='middle'
                onClick={() => {
                    dispatch(postChangePassword(changePassData));
                    history.push('/auth/change-password');
                }}
            >
                Повторить
            </Button>
        </div>
    );
};
