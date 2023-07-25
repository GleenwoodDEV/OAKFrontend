import { useDispatch } from 'react-redux';
import { LogoutSVG, PasswordSVG } from '../../../assets/icons';
import styles from './ShowMenu.module.scss'
import { logout } from '../../../store/slices/auth';

const ShowMenu = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        window.location.reload();
   }
    return (
        <div className={styles.menu_wrapper}>
            <div className={styles.changePassword}>
                <PasswordSVG className={styles.icon}/>
                <div className={styles.passwordText}>
                    Change Password
                </div>
            </div>
            <div className={styles.logout}>
                <LogoutSVG className={styles.icon}/>
                <div className={styles.logoutText} onClick={handleLogout}>
                    Log out
                </div>
            </div>
        </div>
    );
}

export default ShowMenu;