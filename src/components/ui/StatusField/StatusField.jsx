import { useEffect, useState } from "react";
import styles from "./StatusField.module.scss";
import Switch from "react-switch";

const StatusField = (props) => {
  const [activeSwitch, setActiveSwitch] = useState(props.activeSwitch);

  const handleChange = (checked) => {
    props.handleStatus(checked);
    setActiveSwitch(checked);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={activeSwitch ? styles.labelTextRed : styles.labelTextGreen}
        >
          {activeSwitch
            ? props.valueSwitcher.disable
            : props.valueSwitcher.active}
        </div>
        {props.editableMode ? (
          <Switch
            className={styles.switch}
            onChange={handleChange}
            checked={activeSwitch}
            handleDiameter={18}
            onColor="#E8E7E9"
            onHandleColor="#484848"
            offColor="#E8E7E9"
            offHandleColor="#FFFFFF"
            uncheckedIcon={false}
            checkedIcon={false}
            height={25}
            activeBoxShadow={"0px"}
            width={54}
          />
        ) : (
          <div />
        )}
      </div>
    </>
  );
};

export default StatusField;
