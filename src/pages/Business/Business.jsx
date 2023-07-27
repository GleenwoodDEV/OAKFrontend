import InputSearch from "../../components/ui/InputSearch";
import styles from "./Business.module.scss";

import ButtonCreate from "../../components/ui/ButtonCreate";
import ButtonNotification from "../../components/ui/ButtonNotification";
import React, { useState } from "react";
import {
  useAddBusinessMutation,
  useGetBusinessQuery,
  useUpdateBusinessMutation,
} from "../../store/api/BusinessApi";
import { ThreeDots } from "react-loader-spinner";
import MapWrapper from "./components/MapWrapper";
import BusinessInfoPanel from "./components/BusinessInfoPanel";
import { BusinessType } from "./components/BusinessAddItem/BusinessAddItem";
import CreateNotification from "./components/CreateNotification";
import ShowConfirm from "../../components/ui/ShowConfirm/ShowConfirm";

const Business = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const { isLoading, data } = useGetBusinessQuery(searchValue);
  const [addBusiness] = useAddBusinessMutation();
  const [updateBusiness] = useUpdateBusinessMutation();

  const [panelMode, setPanelMode] = useState("VIEW_MODE");
  const [editCoordinates, setEditCoordinates] = useState({});
  const [editType, setEditType] = useState(BusinessType.bar);
  const [editBusiness, setEditBusiness] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleAddMod = () => {
    setPanelMode("ADD_PIN_MODE");
    setEditBusiness(null);
  };

  const handleEditBusiness = () => {
    setPanelMode("EDIT_MODE");
  };

  const handleSelectBusiness = (business) => {
    setPanelMode("VIEW_SELECT_MODE");
    setEditBusiness(business);
  };

  const handleClickMap = (e) => {
    if (panelMode === "ADD_PIN_MODE") {
      const x = e.pageX - e.target.offsetParent.offsetLeft;
      const y = e.pageY - e.target.offsetParent.offsetTop;
      setEditCoordinates({ x, y });
      setPanelMode("EDIT_MODE");
    }
  };

  const handleClose = () => {
    setPanelMode("VIEW_MODE");
    setEditBusiness(null);
  };

  const handleAddSave = (values) => {
    if (editBusiness) {
      const id = editBusiness.id;
      const saveValues = {
        ...values,
        id,
        pinX: editCoordinates.x,
        pinY: editCoordinates.y,
      };
      updateBusiness(saveValues);
    } else {
      const saveValues = {
        ...values,
        pinX: editCoordinates.x,
        pinY: editCoordinates.y,
      };
      addBusiness(saveValues);
    }
    handleClose();
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenConfirmModal = () => {
    setShowConfirmModal(true);
  };

  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      <CreateNotification
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
      <ShowConfirm
        handleViewModClose={handleClose}
        showConfirmModal={showConfirmModal}
        handleCloseConfirmModal={handleCloseConfirmModal}
        businessId={editBusiness?.id}
      />
      {isLoading ? (
        <div className={styles.spinner}>
          <ThreeDots color="#adbeba" width="60" />
        </div>
      ) : (
        <div className={styles.mainWrapper}>
          <div className={styles.business_wrapper}>
            <div className={styles.search_bar}>
              <InputSearch value={searchValue} onChange={handleSearch} />
              <div className={styles.search_btn_wrapper}>
                <ButtonNotification
                  text="Create Notification"
                  onClick={handleOpenModal}
                />
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
                onSave={handleAddSave}
                onChangeType={setEditType}
                onSelectBusiness={handleSelectBusiness}
                onEditBusiness={handleEditBusiness}
                handleOpenConfirmModal={handleOpenConfirmModal}
                editBusiness={editBusiness}
                handleClose={handleClose}
              />
              <MapWrapper
                data={data}
                handleClickMap={handleClickMap}
                mode={panelMode}
                editPin={{ coords: editCoordinates, editType }}
                editBusiness={editBusiness}
                onSelectBusiness={handleSelectBusiness}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Business;
