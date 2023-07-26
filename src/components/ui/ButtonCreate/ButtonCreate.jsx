import styles from "./ButtonCreate.module.scss";

const ButtonCreate = (props) => {
  return (
    <div className={styles.div_button_create} onClick={props.onCustomClick}>
      <button
        type="submit"
        className={styles.button}
        style={{
          width: props.width,
          backgroundColor: props.backgroundColor,
          color: props.textColor,
        }}
      >
        {props.text}
      </button>
    </div>
  );
};

export default ButtonCreate;
