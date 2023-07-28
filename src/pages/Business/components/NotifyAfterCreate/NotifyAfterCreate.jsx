import { useState } from "react";
import styles from "./NotifyAfterCreate.module.scss";
import ReactModal from "react-modal";
import { CloseBtnSVG } from "../../../../assets/icons";
import SelectPicker from "../../../../components/ui/SelectPicker";
import InputText from "../../../../components/ui/InputText";
import ButtonCreate from "../../../../components/ui/ButtonCreate";
import CheckBox from "../../../../components/ui/CheckBox";

const NotifyAfterCreate = (props) => {
  ReactModal.setAppElement("#root");
  const [checked, setChecked] = useState(false);

  const handleChangeCheck = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  const handleConfirm = () => {
    if (checked) {
      props.handleCloseNotifyAfterCreate();
    } else {
      props.handleCloseNotifyAfterCreate();
    }
  };

  return (
    <>
      <ReactModal
        isOpen={props.showNotifyAfterCreate}
        onRequestClose={props.handleCloseNotifyAfterCreate}
        shouldCloseOnOverlayClick={true}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.elementsWrapper}>
          <div className={styles.buttonClose_div}>
            <CloseBtnSVG
              className={styles.buttonCloseSVG}
              onClick={props.handleCloseNotifyAfterCreate}
            />
          </div>

          <div className={styles.article}>Create notification</div>
          <div className={styles.info_text}>
            New Business was successfully created! Please, don`t forget notify
            your customers
          </div>
          <CheckBox
            value={checked}
            onChange={handleChangeCheck}
            labelName="Send notification all your clients"
          />
          <div className={styles.input_items}>
            <ButtonCreate text={"Ok"} onCustomClick={handleConfirm} />
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default NotifyAfterCreate;