import styles from "./ButtonSubmit.module.scss";

const ButtonSubmit = (props) => {
  return <button className={styles.button} type="submit">{props.text}</button>;
};

export default ButtonSubmit;
