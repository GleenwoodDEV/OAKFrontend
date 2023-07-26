import styles from "./InputText.module.scss";

const InputText = (props) => {
  return (
    <div>
      <div className={styles.labeldiv}>{props.labelName}</div>
      <label className={styles.label} htmlFor={styles.input}>
        <input
          id={props.id}
          style={{
            width: props.width,
            backgroundColor: props.backgroundColor,
          }}
          className={styles.input}
          onChange={(e) => props.onChange(e.target.value, e)}
          value={props.value}
        />
      </label>
    </div>
  );
};

export default InputText;
