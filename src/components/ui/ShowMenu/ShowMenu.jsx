import { LogoutSVG, PasswordSVG } from '../../../assets/icons';
import styles from './ShowMenu.module.scss'

const ShowMenu = () => {
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
                <div className={styles.logoutText}>
                    Log out
                </div>
            </div>
        </div>
    );
}

export default ShowMenu;