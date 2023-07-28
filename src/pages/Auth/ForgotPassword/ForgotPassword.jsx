import formStyles from "../Auth.module.scss";
import { Logo } from "../../../assets/icons";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonSubmit from "../../../components/ui/ButtonSubmit/ButtonSubmit";
import InputText from "../../../components/ui/InputText";
import ButtonBack from "../../../components/ui/ButtonBack";
import { useSendRecoveryCodeMutation } from "../../../store/api/UsersApi";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../store/slices/message";
const ForgotPassword = () => {
  const [emailValue, setEmailValue] = useState("");
  const dispatch = useDispatch();

  const [sendRecoveryCode] = useSendRecoveryCodeMutation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { email: emailValue };
    sendRecoveryCode({ body })
      .unwrap()
      .then((payload) => {
        dispatch(
          setMessage({
            message:
              "An email with a verification code has been sent to your email address. ",
            type: "success",
          })
        );
        navigate("/verificationcode", { state: { email: emailValue } });
      })
      .catch((error) => {
        dispatch(
          setMessage({ message: "Please, check your email", type: "error" })
        );
      });
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
                <InputText
                  labelName="Email"
                  value={emailValue}
                  onChange={setEmailValue}
                />
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
