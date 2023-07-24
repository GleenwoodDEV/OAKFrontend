import { SearchSVG } from "../../../assets/icons";
import styles from "./InputSearch.module.scss";

const InputSearch = () => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor={styles.input}>
        <input className={styles.input} />
        <SearchSVG className={styles.icon} />
      </label>
    </div>
  );
};

export default InputSearch;
