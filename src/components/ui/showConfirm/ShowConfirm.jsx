import { useDispatch } from "react-redux";
import { CloseBtnSVG } from "../../../assets/icons";
import { useDeleteCamerasMutation } from "../../../store/api/CamerasApi";
import ButtonCreate from "../ButtonCreate";
import styles from "./ShowConfirm.module.scss";
import ReactModal from "react-modal";
import { setMessage } from "../../../store/slices/message";
import { useDeleteBusinessMutation } from "../../../store/api/BusinessApi";

const ShowConfirm = (props) => {
  const [deleteCamera] = useDeleteCamerasMutation();
  const [deleteBusiness] = useDeleteBusinessMutation();

  const dispatch = useDispatch();

  const handleSave = () => {
    props.handleCloseConfirmModal();
    if (props.deleteCameraId) {
      deleteCamera(props.deleteCameraId)
        .unwrap()
        .then((response) => {
          dispatch(setMessage({ message: response.message, type: "success" }));
        })
        .catch((error) => {
          dispatch(setMessage({ message: error.message, type: "error" }));
        });
    }
    if (props.businessId) {
      deleteBusiness(props.businessId)
        .unwrap()
        .then((response) => {
          dispatch(setMessage({ message: response.message, type: "success" }));
        })
        .catch((error) => {
          dispatch(setMessage({ message: error.message, type: "error" }));
        });
      props.handleViewModClose();
    }
  };
  const handleCancel = () => {
    props.handleCloseConfirmModal();
  };
  return (
    <>
      <ReactModal
        isOpen={props.showConfirmModal}
        onRequestClose={props.handleCloseConfirmModal}
        shouldCloseOnOverlayClick={true}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.elementsWrapper}>
          <div className={styles.buttonClose_div}>
            <CloseBtnSVG
              className={styles.buttonCloseSVG}
              onClick={props.handleCloseConfirmModal}
            />
          </div>
          <div className={styles.article}>Confirm your action</div>
          <div className={styles.info_text}>
            Do you really want to delete this?
          </div>
          <div className={styles.buttons}>
            <ButtonCreate
              text="Yes"
              backgroundColor="#DC6B61"
              onCustomClick={handleSave}
            />
            <ButtonCreate text="Cancel" onCustomClick={handleCancel} />
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default ShowConfirm;
