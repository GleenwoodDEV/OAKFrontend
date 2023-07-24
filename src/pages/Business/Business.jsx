import InputSearch from "../../components/ui/InputSearch";
import styles from "./Business.module.scss";
import mapPNG from "../../assets/map.png";
import ButtonCreate from "../../components/ui/ButtonCreate";
import ButtonNotification from "../../components/ui/ButtonNotification";
import React, { useState } from "react";
import BusinessInfo from "./components/BusinessInfo";
import BusinessNoInfoCap from "./components/BusinessNoInfoCap";
import BusinessChoosePlaceCap from "./components/BusinessChoosePlaceCap";
import ReactModal from "react-modal";
import { useGetBusinessQuery } from "../../store/api/BusinessApi";
import { ThreeDots } from "react-loader-spinner";
import { PinBarSVG } from "../../assets/icons";

const Business = () => {
  const { isLoading, data } = useGetBusinessQuery();
  console.log(data);

  const [addMod, setAddMod] = useState("Nothing");

  const handleAddMod = () => {
    setAddMod("AddPoint");
  };

  const handleClickMap = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    console.log(x, y);
  };

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
              <div className={styles.business_items}>
                {data ? (
                  data.map((item) => <BusinessInfo key={item.id} info={item} />)
                ) : (
                  <BusinessNoInfoCap />
                )}
              </div>
              <div className={styles.map_wrapper}>
                <img
                  className={styles.map}
                  src={mapPNG}
                  alt="map"
                  onClick={handleClickMap}
                />

                {data &&
                  data.map((item) => (
                    <div
                      key={item.id}
                      className={styles.pinWrapper}
                      style={{ top: item.pinY, left: item.pinX }}
                    >
                      <PinBarSVG />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Business;
