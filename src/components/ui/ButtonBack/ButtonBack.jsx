import styles from "./ButtonBack.module.scss";

const ButtonBack = (props) => {
  return (
    <div className={styles.buttonForgot} onClick={props.onClick}>
      {props.text}
    </div>
  );
};

export default ButtonBack;
