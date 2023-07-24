import styles from "./InputPassword.module.scss";
import { Eye } from "../../../assets/icons";
import { useState } from "react";
import React from "react";

const InputPassword = (props) => {
  const [visible, setVisible] = useState(false);

  const eyeClick = () => {
    visible ? setVisible(false) : setVisible(true);
  };
  
  return (
    <div>
      <div className={styles.labeldiv}>{props.labelName}</div>
      <label className={styles.label} htmlFor={styles.input}>
        <input type={visible ? "text" : "password"} className={styles.input} onChange={props.onChange} value={props.value}/>
        <Eye className={styles.eye} onClick={eyeClick} />
      </label>
    </div>
  );
};

export default InputPassword;
