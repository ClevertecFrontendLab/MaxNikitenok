import styles from './result-page.module.css';
import { Outlet } from 'react-router-dom';

export const ResultPage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blur}>
                <Outlet />
            </div>
        </div>
    );
};
