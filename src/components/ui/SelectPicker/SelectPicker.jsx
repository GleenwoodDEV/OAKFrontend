import { ArrowDownSVG } from "../../../assets/icons";
import styles from "./SelectPicker.module.scss";

const SelectPicker = (props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.labeldiv}>{props.labelName}</div>
        <div className={styles.selectWrap}>
          <ArrowDownSVG className={styles.arrow} />
          <select
            id="select"
            className={styles.select}
            onChange={props.handleChangeSelect}
          >
            <option className={styles.zerovalue} value=""></option>
            {props.data.map((item) => (
              <option key={item.id} className={styles.option} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default SelectPicker;
