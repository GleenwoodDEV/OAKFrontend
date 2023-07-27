import ReactModal from "react-modal";
import styles from "./CreateModal.module.scss";
import { useState } from "react";
import { AddPhotoSVG, CloseBtnSVG } from "../../../../assets/icons";
import InputText from "../../../../components/ui/InputText";
import ButtonCreate from "../../../../components/ui/ButtonCreate";
import clsx from "clsx";
import { useMemo } from "react";
import { useAddCameraMutation } from "../../../../store/api/CamerasApi";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../../store/slices/message";

const CreateModal = (props, setShowModal) => {
  ReactModal.setAppElement("#root");
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [rtspfeed1, setSlot1] = useState("");
  const [rtspfeed2, setSlot2] = useState("");
  const [timeOn, setTimeOn] = useState("");
  const [timeFinish, setTimeOff] = useState("");
  const [file, setImg] = useState(null);

  const [imgItemSrc, setImgItemSrc] = useState("");

  const disableSave = useMemo(
    () => !name || !rtspfeed1 || !rtspfeed2 || !timeOn || !timeFinish || !file,
    [name, rtspfeed1, rtspfeed2, timeOn, timeFinish, file]
  );

  const body = { name, rtspfeed1, rtspfeed2, timeOn, timeFinish, file };

  const [addRow] = useAddCameraMutation();

  const clearState = () => {
    setName("");
    setSlot1("");
    setSlot2("");
    setTimeOn("");
    setTimeOff("");
    setImg(null);
    setImgItemSrc("");
  };

  const handleSaveRow = () => {
    addRow(body)
      .unwrap()
      .then((response) => {
        dispatch(
          setMessage({
            message: "Camera has been added successfully",
            type: "success",
          })
        );
      })
      .catch((error) => {
        dispatch(
          setMessage({ message: "Camera has not been added", type: "error" })
        );
      });
    props.handleCloseModal();
    clearState();
  };

  const handleChangeFile = (e) => {
    const file = e.target.files.item(0);
    if (file) {
      setImgItemSrc(URL.createObjectURL(file));
      setImg(file);
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
          <div className={styles.article}>Add new Camera</div>
          <div className={styles.photoWrapper}>
            <label className={styles.label} htmlFor="file">
              <div id="addPhoto" className={styles.addPhoto}>
                {imgItemSrc ? (
                  <img src={imgItemSrc} alt="" />
                ) : (
                  <>
                    <AddPhotoSVG />
                    Add Photo
                  </>
                )}
              </div>
            </label>
            <input
              id="file"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleChangeFile}
              hidden
            />
          </div>

          <div className={styles.input_items}>
            <InputText
              backgroundColor="#F6F5F8"
              labelName="Camera Name"
              value={name}
              onChange={setName}
            />
            <InputText
              backgroundColor="#F6F5F8"
              labelName="Slot 1"
              value={rtspfeed1}
              onChange={setSlot1}
            />
            <InputText
              backgroundColor="#F6F5F8"
              labelName="Slot 2"
              value={rtspfeed2}
              onChange={setSlot2}
            />
            <InputText
              backgroundColor="#F6F5F8"
              labelName="Switch on Time"
              value={timeOn}
              type="time"
              onChange={setTimeOn}
            />
            <InputText
              backgroundColor="#F6F5F8"
              labelName="Switch off Time"
              value={timeFinish}
              type="time"
              onChange={setTimeOff}
            />
          </div>
          <div
            className={clsx([styles.buttonSave, disableSave && styles.disable])}
          >
            <ButtonCreate text="Save" onCustomClick={handleSaveRow} />
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default CreateModal;
