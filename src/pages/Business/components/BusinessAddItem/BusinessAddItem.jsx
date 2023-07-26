import { useEffect, useState } from "react";
import {
  AddPhotoSVG,
  BarMiniIconSVG,
  CafeMiniIconSVG,
  CancelButtonSVG,
  ClubMiniIconSVG,
  RestaurantMiniIconSVG,
} from "../../../../assets/icons";
import ButtonCreate from "../../../../components/ui/ButtonCreate";
import ButtonToggle from "../../../../components/ui/ButtonToggle";
import InputText from "../../../../components/ui/InputText";
import styles from "./BusinessAddItem.module.scss";

export const BusinessType = {
  bar: "bar",
  cafe: "cafe",
  restaurant: "restaurant",
  club: "club",
};

const BusinessAddItem = (props) => {
  const [buisnessType, setBuisnessType] = useState(BusinessType.bar);
  const [imgItemSrc, setImgItemSrc] = useState("");

  const [inputs, setInputs] = useState({
    name: "",
    address: "",
    workingHours: "",
    phone: "",
    link: "",
    instagram: "",
    file: null,
  });

  const handleChangeInputs = (value, e) => {
    setInputs({
      ...inputs,
      [e.target.id]: value,
    });
  };

  const handleChangeFile = (e) => {
    const file = e.target.files.item(0);
    if (file) {
      setImgItemSrc(URL.createObjectURL(file));

      setInputs({
        ...inputs,
        file,
      });
    }
  };

  const handleChangeType = (type) => {
    setBuisnessType(type);
    props.onChangeType(type);
  };

  const handleSaveClick = () => {
    const values = {
      ...inputs,
      buisnessType,
    };
    props.onSave(values);
  };

  useEffect(() => {
    if (props.editBusiness) {
      setInputs({
        name: props.editBusiness.name,
        address: props.editBusiness.address,
        workingHours: props.editBusiness.workingHours,
        phone: props.editBusiness.phone,
        link: props.editBusiness.link,
        instagram: props.editBusiness.instagram,
        file: null,
      });

      setBuisnessType(props.editBusiness.buisnessType);
    }
  }, [props.editBusiness]);

  return (
    <div className={styles.business_card}>
      <div className={styles.article}>
        <div className={styles.cancel_button}>
          <CancelButtonSVG onClick={props.handleClose} />
        </div>
        <div className={styles.article_text}>
          {props.editBusiness ? "Edit Business" : "Add new Business"}
        </div>
      </div>
      <label htmlFor="file">
        <div id="addPhoto" className={styles.addPhoto}>
          {imgItemSrc ? (
            <img src={imgItemSrc} alt="" />
          ) : (
            <>
              <AddPhotoSVG />
              AddPhoto
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
      <div className={styles.inputItems}>
        <InputText
          id="name"
          width={300}
          labelName="Business Name"
          value={inputs.name}
          onChange={handleChangeInputs}
        />
        <InputText
          id="address"
          width={300}
          labelName="Address"
          value={inputs.address}
          onChange={handleChangeInputs}
        />
        <InputText
          id="workingHours"
          width={300}
          labelName="Working hours"
          value={inputs.workingHours}
          onChange={handleChangeInputs}
        />
        <InputText
          id="phone"
          width={300}
          labelName="Phone number"
          value={inputs.phone}
          onChange={handleChangeInputs}
        />
        <InputText
          id="link"
          width={300}
          labelName="Website"
          value={inputs.link}
          onChange={handleChangeInputs}
        />
        <InputText
          id="instagram"
          width={300}
          labelName="Instagram"
          value={inputs.instagram}
          onChange={handleChangeInputs}
        />
      </div>
      <div className={styles.labelTypes}>
        Choose business type and mark it on map
      </div>
      <div className={styles.types}>
        <div className={styles.typeItem}>
          <ButtonToggle
            active={buisnessType === BusinessType.bar && true}
            onClick={() => handleChangeType(BusinessType.bar)}
          >
            <BarMiniIconSVG />
            Bar
          </ButtonToggle>
          <ButtonToggle
            active={buisnessType === BusinessType.restaurant && true}
            onClick={() => handleChangeType(BusinessType.restaurant)}
          >
            <RestaurantMiniIconSVG />
            Restaurant
          </ButtonToggle>
        </div>
        <div className={styles.typeItem}>
          <ButtonToggle
            active={buisnessType === BusinessType.club && true}
            onClick={() => handleChangeType(BusinessType.club)}
          >
            <ClubMiniIconSVG />
            Club
          </ButtonToggle>
          <ButtonToggle
            active={buisnessType === BusinessType.cafe && true}
            onClick={() => handleChangeType(BusinessType.cafe)}
          >
            <CafeMiniIconSVG />
            Cafe
          </ButtonToggle>
        </div>
        <div className={styles.buttons}>
          {props.editBusiness ? (
            <ButtonCreate text="Delete" width={150} />
          ) : (
            <ButtonCreate
              text="Cancel"
              width={150}
              onCustomClick={props.handleClose}
            />
          )}
          <ButtonCreate
            text="Save"
            width={150}
            backgroundColor={"#DC6B61"}
            onCustomClick={handleSaveClick}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessAddItem;
