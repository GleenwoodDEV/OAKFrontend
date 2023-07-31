import ReactModal from "react-modal";
import styles from "./CreateNotification.module.scss";
import { AddImageMiniSVG, CloseBtnSVG } from "../../../../assets/icons";
import SelectPicker from "../../../../components/ui/SelectPicker";
import InputText from "../../../../components/ui/InputText";
import { useState } from "react";
import ButtonCreate from "../../../../components/ui/ButtonCreate";
import { useMemo } from "react";
import clsx from "clsx";
import { useCreateNotificationMutation } from "../../../../store/api/NotificationApi";

const CreateNotification = (props) => {
  ReactModal.setAppElement("#root");
  const [notificationText, setNotificationText] = useState("");
  const [imgItemSrc, setImgItemSrc] = useState("");
  const type = "anouncement";

  const [selectedBusiness, setSelectedBusiness] = useState("");
  const [file, setFile] = useState(null);

  const [createNotification] = useCreateNotificationMutation();

  const handleChangeFile = (e) => {
    const fileitem = e.target.files.item(0);
    if (fileitem) {
      setImgItemSrc(URL.createObjectURL(fileitem));
      setFile(fileitem);
    }
  };

  const disableSave = useMemo(
    () => !selectedBusiness || !file || !notificationText,
    [selectedBusiness, file, notificationText]
  );

  const handleChangeSelect = (e) => {
    e.preventDefault();
    setSelectedBusiness(e.target.value);
  };

  const clearState = () => {
    setFile(null);
    setSelectedBusiness("");
    setNotificationText("");
    setImgItemSrc("");
  };

  const body = { file, notificationText, type, selectedBusiness };

  const handleConfirm = () => {
    createNotification(body);
    clearState();
    props.handleCloseModal();
  };

  return (
    <>
      <ReactModal
        isOpen={props.showModal}
        onRequestClose={props.handleCloseModal}
        shouldCloseOnOverlayClick={true}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.elementsWrapper}>
          <div className={styles.buttonClose_div}>
            <CloseBtnSVG
              className={styles.buttonCloseSVG}
              onClick={props.handleCloseModal}
            />
          </div>

          <div className={styles.article}>Create notification</div>
          <div className={styles.input_items}>
            <SelectPicker
              labelName={"Choose Business"}
              data={props.data}
              value={selectedBusiness}
              handleChangeSelect={handleChangeSelect}
            />
            <InputText
              labelName={"Notification text"}
              backgroundColor={"#F6F5F8"}
              width="360px"
              value={notificationText}
              onChange={setNotificationText}
            />
            <label htmlFor="file">
              <div id="addPhoto" className={styles.addPhoto}>
                {imgItemSrc ? (
                  <img src={imgItemSrc} alt="" />
                ) : (
                  <>
                    <AddImageMiniSVG />
                    Add image
                  </>
                )}
              </div>
            </label>
            <input
              type="file"
              id="file"
              onChange={handleChangeFile}
              accept="image/png, image/jpeg"
              hidden
            ></input>
            <div
              className={clsx([
                styles.buttonSave,
                disableSave && styles.disable,
              ])}
            >
              <ButtonCreate text={"Send"} onCustomClick={handleConfirm} />
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default CreateNotification;
