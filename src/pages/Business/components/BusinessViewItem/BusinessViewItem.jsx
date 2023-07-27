import { CancelButtonSVG } from "../../../../assets/icons";
import ButtonCreate from "../../../../components/ui/ButtonCreate";
import styles from "./BusinessViewItem.module.scss";

const BusinessViewItem = (props) => {
  const handleDeleteItem = () => {
    props.handleOpenConfirmModal();
  };

  return (
    <div className={styles.business_card}>
      <div className={styles.article}>
        <div className={styles.cancel_button}>
          <CancelButtonSVG onClick={props.handleClose} />
        </div>
        <div className={styles.article_text}>View Business</div>
      </div>
      <div className={styles.photo}>
        <img src={props.editBusiness.photo} alt="nophoto"></img>
      </div>
      <div className={styles.info_items}>
        <div className={styles.item}>
          <div className={styles.label}>Business Name</div>
          <div className={styles.item_text}>{props.editBusiness.name}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Address</div>
          <div className={styles.item_text}>{props.editBusiness.address}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Working Hours</div>
          <div className={styles.item_text}>
            {props.editBusiness.workingHours}
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Phone</div>
          <div className={styles.item_text}>{props.editBusiness.phone}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Website</div>
          <div className={styles.item_text}>{props.editBusiness.website}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Instagram</div>
          <div className={styles.item_text}>{props.editBusiness.instagram}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Business Type</div>
          <div className={styles.item_text}>
            {props.editBusiness.buisnessType}
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <ButtonCreate
          text="Delete"
          width={150}
          onCustomClick={handleDeleteItem}
        />
        <ButtonCreate
          onCustomClick={props.onEditBusiness}
          text="Edit"
          width={150}
          backgroundColor={"#FFF"}
          textColor="#010206"
        />
      </div>
    </div>
  );
};

export default BusinessViewItem;
