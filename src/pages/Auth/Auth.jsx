import styles from "./Auth.module.scss";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

const Auth = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default Auth;
