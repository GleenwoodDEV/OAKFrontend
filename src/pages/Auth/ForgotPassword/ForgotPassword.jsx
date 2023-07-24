import styles from './ForgotPassword.module.scss';
import formStyles from '../Auth.module.scss';
import { Logo } from "../../../assets/icons";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonSubmit from "../../../components/ui/ButtonSubmit/ButtonSubmit";
import InputText from "../../../components/ui/InputText";
import InputPassword from "../../../components/ui/InputPassword";
import ButtonBack from "../../../components/ui/ButtonBack";

const ForgotPassword = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
      navigate("/users");
    };

    return (
        <div className={formStyles.loginWrapper}>
          <div className={formStyles.mainBlock}>
            <div className={formStyles.logoBlock}>
              <Logo className={formStyles.logo} />
            </div>
            <div className={formStyles.wrapper}>
              <div className={formStyles.logintext}>Forgot Password</div>
              <div className={formStyles.secondtext}>
              Enter your email and we will send you a verification code
              </div>
              <form className={formStyles.form} onSubmit={handleSubmit}>
                <div className={formStyles.inputItems}>
                  <div className={formStyles.email}>
                    <InputText labelName="Email" />
                  </div>
                  <div className={formStyles.btnWrapper}>
                    <ButtonSubmit text="Send" />
                  </div>
                </div>
              </form>
              <Link to={"/login"}>
                <ButtonBack text="Back to Log in screen" />
              </Link>
            </div>
          </div>
        </div>
      );
    };

export default ForgotPassword;
