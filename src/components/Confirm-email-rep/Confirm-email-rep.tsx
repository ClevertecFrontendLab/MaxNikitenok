import styles from './Confirm-email-rep.module.css';
import VerificationInput from 'react-verification-input';
import { useAppDispatch } from '@redux/configure-store';
import { postConfirmEmail } from '@redux/thunks/post-confirm-email';
import { useSelector } from 'react-redux';
import { selectEmail } from '@redux/auth-slice';

export const ConfirmEmail: React.FC = () => {
    const userEmail = useSelector(selectEmail);
    const dispatch = useAppDispatch();
    return (
        <div className={styles.wrapper}>
            <div className={styles.blur}>
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
                                d='M35.5 0C16.1719 0 0.5 15.6719 0.5 35C0.5 54.3281 16.1719 70 35.5 70C54.8281 70 70.5 54.3281 70.5 35C70.5 15.6719 54.8281 0 35.5 0ZM33 18.125C33 17.7812 33.2812 17.5 33.625 17.5H37.375C37.7188 17.5 38 17.7812 38 18.125V39.375C38 39.7188 37.7188 40 37.375 40H33.625C33.2812 40 33 39.7188 33 39.375V18.125ZM35.5 52.5C34.5187 52.48 33.5843 52.0761 32.8974 51.375C32.2105 50.6739 31.8258 49.7315 31.8258 48.75C31.8258 47.7685 32.2105 46.8261 32.8974 46.125C33.5843 45.4239 34.5187 45.02 35.5 45C36.4813 45.02 37.4157 45.4239 38.1026 46.125C38.7895 46.8261 39.1742 47.7685 39.1742 48.75C39.1742 49.7315 38.7895 50.6739 38.1026 51.375C37.4157 52.0761 36.4813 52.48 35.5 52.5Z'
                                fill='#2F54EB'
                            />
                        </svg>
                    </div>
                    <p className={styles.modalTitle}>
                        Неверный код. Введите код
                        <br /> для восстановления аккауанта
                    </p>
                    <p className={styles.modalDescription}>
                        Мы отправили вам на e-mail <span>{userEmail}</span> шестизначный код.
                        Введите его в поле ниже.
                    </p>
                    <VerificationInput
                        data-test-id='verification-input'
                        onComplete={(code) => {
                            dispatch(postConfirmEmail({ email: userEmail, code: String(code) }));
                        }}
                        placeholder=' '
                        validChars='0-9'
                        classNames={{
                            container: styles.container,
                            character: styles.character,
                            characterInactive: styles.character__inactive,
                            characterSelected: styles.character__selected,
                            characterFilled: styles.character__filled,
                        }}
                    />
                    <p className={styles.modalDescription__bottom}>
                        Не пришло письмо? Проверьте папку Спам.
                    </p>
                </div>
            </div>
        </div>
    );
};