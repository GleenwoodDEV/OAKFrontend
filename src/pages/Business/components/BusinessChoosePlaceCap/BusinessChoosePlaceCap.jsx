import { PencilSVG } from "../../../../assets/icons";
import styles from "./BusinessChoosePlaceCap.module.scss";

const BusinessChoosePlaceCap = () => {
  return (
    <div className={styles.business_card}>
      <div className={styles.icon_wrapper}>
        <PencilSVG />
      </div>
      <div className={styles.cap_text}>
        Choose place for your business on the map
      </div>
    </div>
  );
};

export default BusinessChoosePlaceCap;
