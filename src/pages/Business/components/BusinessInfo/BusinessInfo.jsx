import styles from "./BusinessInfo.module.scss";
import businessPhoto from "../../../../assets/business.png";
import {
  InstagramSVG,
  LocationSVG,
  PhoneSVG,
  WebsiteSVG,
} from "../../../../assets/icons";

const BusinessInfo = ({ info }) => {
  return (
    <div className={styles.business_card}>
      <img className={styles.cardPhoto} src={businessPhoto} alt="nophoto"></img>
      <div className={styles.business_info}>
        <div className={styles.description}>
          <div className={styles.name_wrap}>
            <div className={styles.business_name}>{info.name}</div>
            <div className={styles.time_info}>{info.workingHours}</div>
          </div>
          <div className={styles.icons_div}>
            <div className={styles.icon_background}>
              <WebsiteSVG className={styles.icon} />
            </div>
            <div className={styles.icon_background}>
              <InstagramSVG className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.contact_info}>
          <div className={styles.phone_info}>
            <PhoneSVG className={styles.contact_icon} />
            {info.phone}
          </div>
          <div className={styles.adress}>
            <LocationSVG className={styles.contact_icon} />
            {info.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
