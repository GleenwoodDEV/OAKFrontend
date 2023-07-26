import { ArrowDownSVG } from "../../../assets/icons";
import styles from "./SelectPicker.module.scss";

const SelectPicker = (props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.labeldiv}>{props.labelName}</div>
        <div className={styles.selectWrap}>
          <ArrowDownSVG className={styles.arrow} />
          <select id="select" className={styles.select}>
            <option className={styles.option}>Business name</option>
            <option className={styles.option}>asd</option>
            <option className={styles.option}>asdasd</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SelectPicker;
