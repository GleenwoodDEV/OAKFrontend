import BusinessList from "../BusinessList";
import BusinessChoosePlaceCap from "../BusinessChoosePlaceCap";
import BusinessAddItem from "../BusinessAddItem";

const BusinessInfoPanel = (props) => {
  const { data, mode, onSave } = props;

  switch (mode) {
    case "VIEW_MODE":
      return <BusinessList data={data} />;
    case "ADD_PIN_MODE":
      return <BusinessChoosePlaceCap />;
    case "EDIT_MODE":
      return (
        <BusinessAddItem
          data={data}
          onSave={onSave}
          onChangeType={props.onChangeType}
        />
      );
    default:
      return <BusinessList data={data} />;
  }
};

export default BusinessInfoPanel;
