import styles from "./ButtonNotification.module.scss";

const ButtonNotification = (props) => {
  return (
    <button className={styles.button} type="submit" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default ButtonNotification;
