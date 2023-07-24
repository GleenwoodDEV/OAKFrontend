import styles from "./ButtonCreate.module.scss";

const ButtonCreate = (props) => {
  return (
    <div className={styles.div_button_create} onClick={props.onCustomClick}>
      <button type="submit" className={styles.button}>
        {props.text}
      </button>
    </div>
  );
};

export default ButtonCreate;
