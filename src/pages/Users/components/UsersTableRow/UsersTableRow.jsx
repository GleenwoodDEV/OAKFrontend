import { useState } from "react";
import styles from "./UsersTableRow.module.scss";
import { DeleteBtnSVG, EditBtnSVG, SaveBtnSVG } from "../../../../assets/icons";
import StatusField from "../../../../components/ui/StatusField";

const UsersTableRow = ({ handleSaveEditRow, rowData }) => {
  const [editedRow, setEditedRow] = useState(null);

  const { id, name, email, phone, status } = rowData;

  const handleSaveBtn = (id) => {
    setEditedRow(null);
    handleSaveEditRow(id);
  };

  const handleChange = (e) => {};

  return (
    <tr key={id}>
      <td className={styles.id}>{id}</td>

      <td>{name}</td>
      <td>
        <StatusField
          valueSwitcher={{ active: "Active", disable: "Banned" }}
          activeSwitch={status}
          editableMode={id === editedRow}
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
