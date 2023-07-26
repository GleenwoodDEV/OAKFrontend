import ReactModal from "react-modal";
import styles from "./CreateNotification.module.scss";
import { AddImageMiniSVG, CloseBtnSVG } from "../../../../assets/icons";
import SelectPicker from "../../../../components/ui/SelectPicker";
import InputText from "../../../../components/ui/InputText";
import { useState } from "react";
import ButtonCreate from "../../../../components/ui/ButtonCreate";

const CreateNotification = (props) => {
  ReactModal.setAppElement("#root");
  const [notificationText, setNotificationText] = useState("");
  const [imgItemSrc, setImgItemSrc] = useState("");

  const handleChangeFile = (e) => {
    const file = e.target.files.item(0);
    if (file) {
      setImgItemSrc(URL.createObjectURL(file));
    }
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
            <SelectPicker labelName={"Choose Business"} />
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
            <ButtonCreate text={"Send"} />
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default CreateNotification;
