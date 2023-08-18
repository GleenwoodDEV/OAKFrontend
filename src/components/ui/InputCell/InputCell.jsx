import styles from "./InputCell.module.scss";

const InputCell = (props) => (
  <td className={styles.td}>
    {props.edited ? (
      <input
        style={{ width: props.width, background: props.background_color }}
        className={styles.input}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        type={props.type}
      />
    ) : (
      props.value
    )}
  </td>
);

export default InputCell;
