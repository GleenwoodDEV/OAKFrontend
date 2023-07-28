import clsx from "clsx";
import styles from "./ButtonToggle.module.scss";

const ButtonToggle = (props) => {
  return (
    <div
      className={clsx([styles.toggleWrapper, props.active && styles.active])}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default ButtonToggle;
