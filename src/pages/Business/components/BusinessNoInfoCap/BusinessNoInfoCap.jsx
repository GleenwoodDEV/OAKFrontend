import { MoodSadSVG } from '../../../../assets/icons';
import styles from './BusinessNoInfoCap.module.scss'

const BusinessNoInfoCap = () => {
    return (
        <div className={styles.business_card}>
            <div className={styles.icon_wrapper}>
                <MoodSadSVG />
            </div>
            <div className={styles.cap_text}>
                No business has been found
            </div>
        </div>
    );
}

export default BusinessNoInfoCap;