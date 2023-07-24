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

const Cameras = (props) => {
  const { isLoading, data } = useGetCamerasQuery();

  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const headersAll = Object.keys(data[0]);
    const filteredHeaders = headersAll.filter(
      (item) => item !== "createdAt" && item !== "updatedAt"
    );

    setHeaders([...filteredHeaders, ""]);
  }, [isLoading, data]);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

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
            <InputSearch />
            <ButtonCreate
              text="Add new Camera"
              onCustomClick={handleOpenModal}
            />
          </div>
          <Table headers={headers}>
            {data.map((rowData) => (
              <CameraTableRow
                key={rowData.id}
                rowData={rowData}
                handleSaveEditRow={() => console.log("a")}
              />
            ))}
          </Table>
        </div>
      )}
    </>
  );
};

export default Cameras;
