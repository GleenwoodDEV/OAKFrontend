import styles from "./InputText.module.scss";

const InputText = (props) => {
  return (
    <div>
      <div className={styles.labeldiv}>{props.labelName}</div>
      <label className={styles.label} htmlFor={styles.input}>
        <input
          style={{ width: props.width, background: props.background_color }}
          className={styles.input}
          onChange={e => props.onChange(e.target.value)}
          value={props.value}
        />
      </label>
    </div>
  );
};

export default InputText;
