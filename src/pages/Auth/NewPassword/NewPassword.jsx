import styles from "./NewPassword.module.scss";
import { Logo } from "../../../assets/icons";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonSubmit from "../../../components/ui/ButtonSubmit/ButtonSubmit";
import InputPassword from "../../../components/ui/InputPassword";
import { useChangePasswordMutation } from "../../../store/api/UsersApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setMessage } from "../../../store/slices/message";

const NewPassword = () => {
  const { user } = useSelector((state) => state.auth);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  useEffect(() => {
    if (!user && !state) {
      navigate("/login");
    }
  }, [user, navigate, state]);

  const [changePassword] = useChangePasswordMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      const id = state?.id || user?.id;
      const body = {
        password: oldPassword,
        newPassword: newPassword,
      };
      changePassword({ id, body })
        .unwrap()
        .then((response) => {
          dispatch(
            setMessage({
              message: "Password was successfully changed",
              type: "success",
            })
          );
          navigate("/login");
        })
        .catch((error) => {
          dispatch(setMessage({ message: error.data.message, type: "error" }));
        });
    } else {
      dispatch(
        setMessage({
          message: "Please, check fields with new password",
          type: "error",
        })
      );
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.mainBlock}>
        <div className={styles.logoBlock}>
          <Logo className={styles.logo} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.logintext}>New Password</div>
          <div className={styles.secondtext}>
            To change the current password, enter the new password in both
            fields
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputItems}>
              <div className={styles.email}>
                <InputPassword
                  labelName="Old password"
                  value={oldPassword}
                  onChange={setOldPassword}
                />
                <InputPassword
                  labelName="New password"
                  value={newPassword}
                  onChange={setNewPassword}
                />
                <InputPassword
                  labelName="Confirm new password"
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                />
              </div>
              <div className={styles.btnWrapper}>
                <ButtonSubmit text="Save" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
