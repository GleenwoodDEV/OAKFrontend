import styles from "./MapWrapper.module.scss";
import mapPNG from "../../../../assets/map.png";
import clsx from "clsx";
import MapPin from "../MapPin";

const MapWrapper = (props) => {
  return (
    <div
      className={clsx([
        styles.map_wrapper,
        props.mode === "ADD_PIN_MODE" && styles.edit,
      ])}
      onClick={props.handleClickMap}
    >
      <img className={styles.map} src={mapPNG} alt="map" />

      {props.data &&
        props.data.map((item) => (
          <MapPin
            key={item.id}
            x={item.pinX}
            y={item.pinY}
            type={item.buisnessType}
            active={props.editBusiness && props.editBusiness.id === item.id}
            onClick={() => props.onSelectBusiness(item)}
          />
        ))}

      {props.editPin &&
        props.mode !== "ADD_PIN_MODE" &&
        props.mode !== "VIEW_MODE" &&
        !props.editBusiness && (
          <MapPin
            x={props.editPin.coords.x}
            y={props.editPin.coords.y}
            type={props.editPin.editType}
            active
          />
        )}
    </div>
  );
};

export default MapWrapper;
