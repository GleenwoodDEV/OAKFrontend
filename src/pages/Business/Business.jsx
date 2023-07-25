import InputSearch from "../../components/ui/InputSearch";
import styles from "./Business.module.scss";

import ButtonCreate from "../../components/ui/ButtonCreate";
import ButtonNotification from "../../components/ui/ButtonNotification";
import React, { useState } from "react";
import BusinessInfo from "./components/BusinessListItem";
import BusinessNoInfoCap from "./components/BusinessNoInfoCap";
import BusinessChoosePlaceCap from "./components/BusinessChoosePlaceCap";
import ReactModal from "react-modal";
import {
  useAddBusinessMutation,
  useGetBusinessQuery,
} from "../../store/api/BusinessApi";
import { ThreeDots } from "react-loader-spinner";
import MapWrapper from "./components/MapWrapper";
import BusinessInfoPanel from "./components/BusinessInfoPanel";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { BusinessType } from "./components/BusinessAddItem/BusinessAddItem";

const Business = () => {
  const { isLoading, data } = useGetBusinessQuery();
  const [addBusiness] = useAddBusinessMutation();

  const [panelMode, setPanelMode] = useState("VIEW_MODE");
  const [editCoordinates, setEditCoordinates] = useState({});
  const [editType, setEditType] = useState(BusinessType.bar);

  const handleAddMod = () => {
    setPanelMode("ADD_PIN_MODE");
  };

  const handleClickMap = (e) => {
    if (panelMode === "ADD_PIN_MODE") {
      const x = e.pageX - e.target.offsetParent.offsetLeft;
      const y = e.pageY - e.target.offsetParent.offsetTop;
      setEditCoordinates({ x, y });
      setPanelMode("EDIT_MODE");
    }
  };

  const handleSave = (values) => {
    const saveValues = {
      ...values,
      pinX: editCoordinates.x,
      pinY: editCoordinates.y,
    };
    addBusiness(saveValues);
    setPanelMode("VIEW_MODE");
  };

  //const { isLoggedIn } = useSelector((state) => state.auth);

  // if (!isLoggedIn) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <>
      {isLoading ? (
        <div className={styles.spinner}>
          <ThreeDots color="#adbeba" width="60" />
        </div>
      ) : (
        <div className={styles.mainWrapper}>
          <div className={styles.business_wrapper}>
            <div className={styles.search_bar}>
              <InputSearch />
              <div className={styles.search_btn_wrapper}>
                <ButtonNotification text="Create Notification" />
                <ButtonCreate
                  text="Add new Business"
                  onCustomClick={handleAddMod}
                />
              </div>
            </div>
            <div className={styles.map_content}>
              <BusinessInfoPanel
                data={data}
                mode={panelMode}
                onSave={handleSave}
                onChangeType={setEditType}
              />
              <MapWrapper
                data={data}
                handleClickMap={handleClickMap}
                mode={panelMode}
                editPin={{ coords: editCoordinates, editType }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Business;
