import BusinessList from "../BusinessList";
import BusinessChoosePlaceCap from "../BusinessChoosePlaceCap";
import BusinessAddItem from "../BusinessAddItem";
import BusinessViewItem from "../BusinessViewItem/BusinessViewItem";

const BusinessInfoPanel = (props) => {
  const {
    data,
    mode,
    onSave,
    onSelectBusiness,
    editBusiness,
    handleClose,
    onEditBusiness,
  } = props;

  switch (mode) {
    case "VIEW_MODE":
      return <BusinessList data={data} onSelectBusiness={onSelectBusiness} />;
    case "ADD_PIN_MODE":
      return <BusinessChoosePlaceCap />;
    case "VIEW_SELECT_MODE":
      return (
        <BusinessViewItem
          editBusiness={editBusiness}
          handleClose={handleClose}
          onEditBusiness={onEditBusiness}
        />
      );
    case "EDIT_MODE":
      return (
        <BusinessAddItem
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
