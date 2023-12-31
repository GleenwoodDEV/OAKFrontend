import formStyles from "../Auth.module.scss";
import { Logo } from "../../../assets/icons";

import { useState } from "react";
import { Link, useLocation, useNavigate, useRoutes } from "react-router-dom";
import ButtonSubmit from "../../../components/ui/ButtonSubmit/ButtonSubmit";
import InputText from "../../../components/ui/InputText";
import ButtonBack from "../../../components/ui/ButtonBack";
import { useEffect } from "react";
import { useCompareRecoveryCodeMutation } from "../../../store/api/UsersApi";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../store/slices/message";

const VerificationCode = (props) => {
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const [compareRecoverCode] = useCompareRecoveryCodeMutation();

  useEffect(() => {
    if (!state?.email) {
      navigate("/login");
    }
  }, [state, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { email: state.email, code: verificationCode };
    compareRecoverCode({ body })
      .unwrap()
      .then((response) => {
        dispatch(
          setMessage({ message: "Recovery code is correct!", type: "success" })
        );
        navigate("/newpassword", { state: { id: response.userId } });
      })
      .catch((error) => {
        dispatch(
          setMessage({ message: "Invalid recovery code", type: "error" })
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
          <div className={formStyles.logintext}>Verification code</div>
          <div className={formStyles.secondtext}>
            An email with verification code was just sent to {state.email}
          </div>
          <form className={formStyles.form} onSubmit={handleSubmit}>
            <div className={formStyles.inputItems}>
              <div className={formStyles.email}>
                <InputText
                  labelName="Verification code"
                  value={verificationCode}
                  onChange={setVerificationCode}
                />
              </div>
              <div className={formStyles.btnWrapper}>
                <ButtonSubmit text="Continue" />
              </div>
            </div>
          </form>
          <ButtonBack
            text="Change Email"
            onClick={() => navigate("/forgotpassword")}
          ></ButtonBack>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
