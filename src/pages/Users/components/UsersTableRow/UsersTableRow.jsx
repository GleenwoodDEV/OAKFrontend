import { useEffect, useState } from "react";
import styles from "./UsersTableRow.module.scss";
import { DeleteBtnSVG, EditBtnSVG, SaveBtnSVG } from "../../../../assets/icons";
import StatusField from "../../../../components/ui/StatusField";
import { useBanUsersMutation } from "../../../../store/api/UsersApi";

const UsersTableRow = ({ rowData }) => {
  const [editedRow, setEditedRow] = useState(null);

  const { id, name, email, phone, isBlocked } = rowData;

  const [newBlockStatus, setNewBlockStatus] = useState(isBlocked);

  const [banUser] = useBanUsersMutation();

  const handleSaveBtn = () => {
    setEditedRow(null);
    if (isBlocked !== newBlockStatus) {
      banUser(id);
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
