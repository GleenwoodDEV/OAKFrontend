import { useDispatch } from "react-redux";
import { LogoutSVG, PasswordSVG } from "../../../assets/icons";
import styles from "./ShowMenu.module.scss";
import { logout } from "../../../store/slices/auth";
import { useNavigate } from "react-router-dom";

const ShowMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

  const handleNavigate = () => {
    navigate("/newpassword");
  };
  return (
    <div className={styles.menu_wrapper}>
      <div className={styles.changePassword}>
        <PasswordSVG className={styles.icon} />
        <div className={styles.passwordText} onClick={handleNavigate}>
          Change Password
        </div>
      </div>
      <div className={styles.logout}>
        <LogoutSVG className={styles.icon} />
        <div className={styles.logoutText} onClick={handleLogout}>
          Log out
        </div>
      </div>
    </div>
  );
};

export default ShowMenu;
