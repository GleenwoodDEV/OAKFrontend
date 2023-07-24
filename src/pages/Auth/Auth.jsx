import styles from "./Auth.module.scss";
import Login from "./Login";
import ForgotPassword from './ForgotPassword'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default Auth;
