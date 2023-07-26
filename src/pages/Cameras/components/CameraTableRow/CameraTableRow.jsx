import { useState } from "react";
import styles from "./CameraTableRow.module.scss";
import {
  CameraImageSVG,
  DeleteBtnSVG,
  EditBtnSVG,
  SaveBtnSVG,
} from "../../../../assets/icons";
import InputText from "../../../../components/ui/InputText";
import StatusField from "../../../../components/ui/StatusField";
import {
  useChangeCameraStatusMutation,
  useDeleteCamerasMutation,
  useUpdateCamerasMutation,
} from "../../../../store/api/CamerasApi";
import InputCell from "../../../../components/ui/InputCell";

const CameraTableRow = ({ handleSaveEditRow, rowData }) => {
  const [editedRow, setEditedRow] = useState(null);

  const { id } = rowData;
  const [name, setName] = useState(rowData.name);
  const [rtspfeed1, setRtspfeed1] = useState(rowData.rtspfeed1);
  const [rtspfeed2, setRtspfeed2] = useState(rowData.rtspfeed2);
  const [timeOn, setTimeOn] = useState(rowData.timeOn);
  const [timeFinish, setTimeOff] = useState(rowData.timeFinish);
  const [status, setStatus] = useState(!rowData.status);

  const body = { name, rtspfeed1, rtspfeed2, timeOn, timeFinish, status };

  const [newBlockStatus, setNewBlockStatus] = useState("");

  const [deleteRow] = useDeleteCamerasMutation();
  const [updateRow] = useUpdateCamerasMutation();
  const [changeCameraStatus] = useChangeCameraStatusMutation();

  const handleSaveBtn = () => {
    setEditedRow(null);
    if (status !== newBlockStatus) {
      changeCameraStatus(id);
    }
  };

  const handleStatus = (checked) => {
    setNewBlockStatus(checked);
  };

  const [imgItemSrc, setImgItemSrc] = useState("");

  const handleChangeFile = (e) => {
    const file = e.target.files.item(0);
    if (file) {
      setImgItemSrc(URL.createObjectURL(file));
    }
  };

  return (
    <tr key={id}>
      <td className={styles.photo}>
        {id === editedRow && (
          <div className={styles.photo_wrapper}>
            <label htmlFor="file">
              <div id="addPhoto" className={styles.addPhoto}>
                {imgItemSrc ? (
                  <img src={imgItemSrc} alt="" />
                ) : (
                  <>
                    <CameraImageSVG />
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
          </div>
        )}
      </td>
      <InputCell value={name} onChange={setName} edited={id === editedRow} />
      <InputCell
        value={rtspfeed1}
        onChange={setRtspfeed1}
        edited={id === editedRow}
      />
      <InputCell
        value={rtspfeed2}
        onChange={setRtspfeed2}
        edited={id === editedRow}
      />
      <InputCell
        value={timeOn}
        onChange={setTimeOn}
        type="time"
        edited={id === editedRow}
      />
      <InputCell
        value={timeFinish}
        onChange={setTimeOff}
        type="time"
        edited={id === editedRow}
      />
      <td>
        <StatusField
          valueSwitcher={{ active: "On", disable: "Off" }}
          activeSwitch={status}
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
        <DeleteBtnSVG className={styles.btnSVG} onClick={() => deleteRow(id)} />
      </td>
    </tr>
  );
};

export default CameraTableRow;
