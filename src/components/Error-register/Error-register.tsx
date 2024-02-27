import { Button } from 'antd';
import styles from './Error-register.module.css';
import { history } from '@redux/configure-store';

export const ErrorRegister: React.FC = () => {
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
                        d='M35.9443 0.444458C16.6162 0.444458 0.944336 16.1163 0.944336 35.4445C0.944336 54.7726 16.6162 70.4445 35.9443 70.4445C55.2725 70.4445 70.9443 54.7726 70.9443 35.4445C70.9443 16.1163 55.2725 0.444458 35.9443 0.444458ZM48.8662 48.7413L43.71 48.7179L35.9443 39.4601L28.1865 48.7101L23.0225 48.7335C22.6787 48.7335 22.3975 48.4601 22.3975 48.1085C22.3975 47.9601 22.4521 47.8195 22.5459 47.7023L32.71 35.5929L22.5459 23.4913C22.4515 23.3768 22.3991 23.2335 22.3975 23.0851C22.3975 22.7413 22.6787 22.4601 23.0225 22.4601L28.1865 22.4835L35.9443 31.7413L43.7021 22.4913L48.8584 22.4679C49.2021 22.4679 49.4834 22.7413 49.4834 23.0929C49.4834 23.2413 49.4287 23.382 49.335 23.4991L39.1865 35.6007L49.3428 47.7101C49.4365 47.8273 49.4912 47.9679 49.4912 48.1163C49.4912 48.4601 49.21 48.7413 48.8662 48.7413Z'
                        fill='#FF4D4F'
                    />
                </svg>
            </div>
            <p className={styles.modalTitle}>Данные не сохранились</p>
            <p className={styles.modalDescription}>
                Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.
            </p>
            <Button type='primary' size='middle' onClick={() => history.push('/auth/registration')}>
                Назад к регистрации
            </Button>
        </div>
    );
};