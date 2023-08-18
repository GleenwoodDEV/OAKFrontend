import styles from "./CameraTableRow.module.scss";
import {
  CameraImageSVG,
  DeleteBtnSVG,
  EditBtnSVG,
  SaveBtnSVG,
} from "../../../../assets/icons";

import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import StatusField from "../../../../components/ui/StatusField";
import InputCell from "../../../../components/ui/InputCell";

import {
  useChangeCameraStatusMutation,
  useDeleteCamerasMutation,
  useUpdateCamerasMutation,
} from "../../../../store/api/CamerasApi";
import { setMessage } from "../../../../store/slices/message";

const CameraTableRow = (props) => {
  const dispatch = useDispatch();

  const [editedRow, setEditedRow] = useState(null);
  const { id } = props.rowData;
  const [name, setName] = useState(props.rowData.name);
  const [rtspfeed1, setRtspfeed1] = useState(props.rowData.rtspfeed1);
  const [rtspfeed2, setRtspfeed2] = useState(props.rowData.rtspfeed2);
  const [timeOn, setTimeOn] = useState(props.rowData.timeOn);
  const [timeFinish, setTimeOff] = useState(props.rowData.timeFinish);
  const [status, setStatus] = useState(props.rowData.status);
  const [file, setFile] = useState(null);

  //const resultTimeOn = timeOn.toLocaleString("en-US");

  const body = {
    id,
    name,
    rtspfeed1,
    rtspfeed2,
    timeOn,
    timeFinish,
    status,
    file,
  };

  const [newBlockStatus, setNewBlockStatus] = useState(status);

  const [updateRow] = useUpdateCamerasMutation();
  const [changeCameraStatus] = useChangeCameraStatusMutation();

  const handleSaveBtn = () => {
    if (status !== newBlockStatus) {
      changeCameraStatus(id)
        .unwrap()
        .then((response) => {
          setStatus(response.status);
          if (!response.status) {
            dispatch(
              setMessage({
                message: "Camera off",
                type: "success",
              })
            );
          }
          if (response.status) {
            dispatch(
              setMessage({
                message: "Camera on",
                type: "success",
              })
            );
          }
        })
        .catch((error) => {
          dispatch(setMessage({ message: error.message, type: "error" }));
        });
    }
    updateRow(body)
      .unwrap()
      .then((response) => {
        dispatch(
          setMessage({
            message: "Camera has been updated successfully",
            type: "success",
          })
        );
      })
      .catch((error) => {
        dispatch(
          setMessage({ message: "Camera has not been updated", type: "error" })
        );
      });
    setEditedRow("");
    setFile(null);
    setImgItemSrc(null);
  };

  const handleStatus = (checked) => {
    setNewBlockStatus(!checked);
  };

  const [imgItemSrc, setImgItemSrc] = useState("");

  const handleChangeFile = (e) => {
    const file = e.target.files.item(0);
    if (file) {
      setImgItemSrc(URL.createObjectURL(file));
      setFile(file);
    }
  };

  const handleDeleteRow = () => {
    props.handleOpenConfirmModal(id);
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
      <InputCell
        value={name}
        onChange={setName}
        edited={id === editedRow}
        width={100}
      />
      <InputCell
        value={rtspfeed1}
        width={350}
        onChange={setRtspfeed1}
        edited={id === editedRow}
      />
      <InputCell
        width={350}
        value={rtspfeed2}
        onChange={setRtspfeed2}
        edited={id === editedRow}
      />
      <InputCell
        value={timeOn}
        width={50}
        onChange={setTimeOn}
        //type="time"
        edited={id === editedRow}
      />
      <InputCell
        width={50}
        value={timeFinish}
        onChange={setTimeOff}
        //type="time"
        edited={id === editedRow}
      />
      <td>
        <StatusField
          valueSwitcher={{ active: "On", disable: "Off" }}
          activeSwitch={!status}
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
        <DeleteBtnSVG className={styles.btnSVG} onClick={handleDeleteRow} />
      </td>
    </tr>
  );
};

export default CameraTableRow;
