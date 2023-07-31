import styles from "./Login.module.scss";
import formStyles from "../Auth.module.scss";
import { Logo } from "../../../assets/icons";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ButtonBack from "../../../components/ui/ButtonBack";
import ButtonSubmit from "../../../components/ui/ButtonSubmit/ButtonSubmit";
import InputPassword from "../../../components/ui/InputPassword";
import InputText from "../../../components/ui/InputText";
import { useState } from "react";
import { login } from "../../../store/slices/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/users");
      })
      .catch((error) => {});
  };

  return (
    <div className={formStyles.loginWrapper}>
      <div className={formStyles.mainBlock}>
        <div className={formStyles.logoBlock}>
          <Logo className={formStyles.logo} />
        </div>
        <div className={formStyles.wrapper}>
          <div className={formStyles.logintext}>Log In</div>
          <div className={formStyles.secondtext}>
            Please, Log in to access more features
          </div>
          <form className={formStyles.form} onSubmit={handleSubmit}>
            <div className={formStyles.inputItems}>
              <div className={formStyles.email}>
                <InputText
                  styleName="InputForm"
                  labelName="Email"
                  value={email}
                  onChange={setEmail}
                />
              </div>
              <div className={formStyles.password}>
                <InputPassword
                  labelName="Password"
                  onChange={setPassword}
                  value={password}
                />
              </div>
              <div className={formStyles.btnWrapper}>
                <ButtonSubmit text="Log In" />
              </div>
            </div>
          </form>

          <ButtonBack
            text="Forgot password?"
            onClick={() => navigate("/forgotpassword")}
          ></ButtonBack>
        </div>
      </div>
    </div>
  );
};

export default Login;
