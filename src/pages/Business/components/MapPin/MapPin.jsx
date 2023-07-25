import clsx from "clsx";
import styles from "./MapPin.module.scss";
import MapPinIcon from "./MapPinIcon";

const MapPin = (props) => {
  return (
    <div
      className={clsx([styles.pinWrapper, props.active && styles.active])}
      style={{
        top: props.y - 80,
        left: props.x - 27,
      }}
    >
      <MapPinIcon type={props.type} />
    </div>
  );
};

export default MapPin;
