import formStyles from "../Auth.module.scss";
import { Logo } from "../../../assets/icons";

import { useState } from "react";
import { Link, useLocation, useNavigate, useRoutes } from "react-router-dom";
import ButtonSubmit from "../../../components/ui/ButtonSubmit/ButtonSubmit";
import InputText from "../../../components/ui/InputText";
import ButtonBack from "../../../components/ui/ButtonBack";
import { useEffect } from "react";
import { useCompareRecoveryCodeMutation } from "../../../store/api/UsersApi";

const VerificationCode = (props) => {
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();
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
      .then((response) =>
        navigate("/newpassword", { state: { id: response.userId } })
      )
      .catch((error) => console.error("rejected", error));
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
                  labelName="Email"
                  value={verificationCode}
                  onChange={setVerificationCode}
                />
              </div>
              <div className={formStyles.btnWrapper}>
                <ButtonSubmit text="Continue" />
              </div>
            </div>
          </form>
          <Link to={"/forgotpassword"}>
            <ButtonBack text="Change Email" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
