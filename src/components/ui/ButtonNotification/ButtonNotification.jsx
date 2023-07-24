import styles from "./ButtonNotification.module.scss";

const ButtonNotification = (props) => {
  return <button className={styles.button} type="submit">{props.text}</button>;
};

export default ButtonNotification;
