import ReactModal from "react-modal";
import styles from "./CreateModal.module.scss";
import { useState } from "react";
import { CloseBtnSVG } from "../../../../assets/icons";
import InputText from "../../../../components/ui/InputText";
import ButtonCreate from "../../../../components/ui/ButtonCreate";
import clsx from "clsx";
import { useMemo } from "react";
import { useAddCameraMutation } from "../../../../store/api/CamerasApi";

const CreateModal = (props, setShowModal) => {
  ReactModal.setAppElement("#root");

  const [name, setName] = useState("");
  const [rtspfeed1, setSlot1] = useState("");
  const [rtspfeed2, setSlot2] = useState("");
  const [timeOn, setTimeOn] = useState("");
  const [timeFinish, setTimeOff] = useState("");

  const disableSave = useMemo(
    () => !name || !rtspfeed1 || !rtspfeed2 || !timeOn || !timeFinish,
    [name, rtspfeed1, rtspfeed2, timeOn, timeFinish]
  );

  const body = { name, rtspfeed1, rtspfeed2, timeOn, timeFinish };

  const [addRow] = useAddCameraMutation();

  const handleSaveRow = () => {
    addRow(body);
    setName("");
    setSlot1("");
    setSlot2("");
    setTimeOff("");
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
          <div className={styles.article}>Add new Camera</div>
          <div className={styles.input_items}>
            <InputText
              background_color="#F6F5F8"
              labelName="CameraName"
              value={name}
              onChange={setName}
            />
            <InputText
              background_color="#F6F5F8"
              labelName="Slot 1"
              value={rtspfeed1}
              onChange={setSlot1}
            />
            <InputText
              background_color="#F6F5F8"
              labelName="Slot 2"
              value={rtspfeed2}
              onChange={setSlot2}
            />
            <InputText
              background_color="#F6F5F8"
              labelName="Switch on Time"
              value={timeOn}
              onChange={setTimeOn}
            />
            <InputText
              background_color="#F6F5F8"
              labelName="Switch off Time"
              value={timeFinish}
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
