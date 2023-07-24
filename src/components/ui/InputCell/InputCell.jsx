import styles from "./InputCell.module.scss";

const InputCell = (props) => (
  <td>
    {props.edited ? (
      <input
        type="text"
        style={{ width: props.width, background: props.background_color }}
        className={styles.input}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
      />
    ) : (
      props.value
    )}
  </td>
);

export default InputCell;
