import { CloseBtnSVG } from '../../../assets/icons';
import styles from './ShowConfirm.module.scss';
import ReactModal from "react-modal";

const ShowConfirm = (props) => {
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
                        <CloseBtnSVG className={styles.buttonCloseSVG} onClick={props.handleCloseModal} />
                    </div>
                    <div className={styles.article}>
                        Are you sure wish to delete this item?
                    </div>
                </div>
            </ReactModal>
        </>
    )
}

export default ShowConfirm