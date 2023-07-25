import BusinessList from "../BusinessList";
import BusinessChoosePlaceCap from "../BusinessChoosePlaceCap";
import BusinessAddItem from "../BusinessAddItem";

const BusinessInfoPanel = (props) => {
  const { data, mode, onSave, onSelectBusiness, editBusiness, handleClose } =
    props;

  switch (mode) {
    case "VIEW_MODE":
      return <BusinessList data={data} onSelectBusiness={onSelectBusiness} />;
    case "ADD_PIN_MODE":
      return <BusinessChoosePlaceCap />;
    case "EDIT_MODE":
      return (
        <BusinessAddItem
          data={data}
          onSave={onSave}
          editBusiness={editBusiness}
          onChangeType={props.onChangeType}
          handleClose={handleClose}
        />
      );
    default:
      return null;
  }
};

export default BusinessInfoPanel;
