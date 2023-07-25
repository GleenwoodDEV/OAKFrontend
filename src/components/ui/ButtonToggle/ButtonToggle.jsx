import clsx from "clsx";
import styles from "./ButtonToggle.module.scss";

const ButtonToggle = (props) => {
  console.log();
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
