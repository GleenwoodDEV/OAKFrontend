import { useEffect, useState } from "react";
import styles from "./UsersTableRow.module.scss";
import { DeleteBtnSVG, EditBtnSVG, SaveBtnSVG } from "../../../../assets/icons";
import StatusField from "../../../../components/ui/StatusField";
import { useBanUsersMutation } from "../../../../store/api/UsersApi";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../../store/slices/message";

const UsersTableRow = ({ rowData }) => {
  const [editedRow, setEditedRow] = useState(null);
  const dispatch = useDispatch();

  const { id, name, email, phone, isBlocked } = rowData;

  const [newBlockStatus, setNewBlockStatus] = useState(isBlocked);

  const [banUser] = useBanUsersMutation();

  const handleSaveBtn = () => {
    setEditedRow(null);
    if (isBlocked !== newBlockStatus) {
      banUser(id)
        .unwrap()
        .then((response) => {
          if (response.isBlocked === true) {
            dispatch(
              setMessage({
                message: "User has been banned",
                type: "success",
              })
            );
          } else {
            dispatch(
              setMessage({
                message: "User has been unbanned",
                type: "success",
              })
            );
          }
        })
        .catch((error) => {
          dispatch(setMessage({ message: error.message, type: "error" }));
        });
    }
  };
  const handleStatus = (checked) => {
    setNewBlockStatus(checked);
  };

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <StatusField
          valueSwitcher={{ active: "Active", disable: "Banned" }}
          activeSwitch={newBlockStatus}
          editableMode={id === editedRow}
          handleStatus={handleStatus}
        />
      </td>
      <td className={styles.btnItems}>
        {id === editedRow ? (
          <SaveBtnSVG
            className={styles.btnSVG}
            onClick={() => handleSaveBtn(id)}
          />
        ) : (
          <EditBtnSVG
            className={styles.btnSVG}
            onClick={() => setEditedRow(id)}
          />
        )}
      </td>
    </tr>
  );
};

export default UsersTableRow;
