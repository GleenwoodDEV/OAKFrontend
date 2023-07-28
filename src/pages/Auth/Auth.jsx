import styles from "./Auth.module.scss";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import VerificationCode from "./VerificationCode/";
import NewPassword from "./NewPassword";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const Auth = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
      <Route path="verificationcode" element={<VerificationCode />} />
      <Route path="newpassword" element={<NewPassword />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default Auth;
