import InputSearch from "../../components/ui/InputSearch";
import Table from "../../components/ui/Table";
import styles from "./Cameras.module.scss";
import { useGetCamerasQuery } from "../../store/api/CamerasApi";
import ButtonCreate from "../../components/ui/ButtonCreate";
import { useState } from "react";
import CreateModal from "./components/CreateModal";
import { useEffect } from "react";
import CameraTableRow from "./components/CameraTableRow";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Cameras = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { isLoading, data } = useGetCamerasQuery(searchValue);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const headers = [
    "",
    "Camera Name",
    "Slot 1",
    "Slot 2",
    "Switch on Time",
    "Switch off Time",
    "Status",
    " ",
  ];

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {isLoading ? (
        <div className={styles.spinner}>
          <ThreeDots color="#adbeba" width="60" />
        </div>
      ) : (
        <div className={styles.wrapper}>
          <CreateModal
            showModal={showModal}
            handleCloseModal={handleCloseModal}
          />
          <div className={styles.search_bar}>
            <InputSearch value={searchValue} onChange={handleSearch} />
            <ButtonCreate
              text="Add new Camera"
              onCustomClick={handleOpenModal}
            />
          </div>
          {data.length > 0 ? (
            <Table headers={headers}>
              {data.map((rowData) => (
                <CameraTableRow
                  key={rowData.id}
                  rowData={rowData}
                  handleSaveEditRow={() => console.log("a")}
                />
              ))}
            </Table>
          ) : (
            <div className={styles.noDataCap}>No data</div>
          )}
        </div>
      )}
    </>
  );
};

export default Cameras;
