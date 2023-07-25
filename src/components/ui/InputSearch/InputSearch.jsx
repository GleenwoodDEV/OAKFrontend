import { SearchSVG } from "../../../assets/icons";
import styles from "./InputSearch.module.scss";

const InputSearch = (props) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor={styles.input}>
        <input
          className={styles.input}
          value={props.value}
          onChange={props.onChange}
        />
        <SearchSVG className={styles.icon} />
      </label>
    </div>
  );
};

export default InputSearch;
