import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const parseJWT = (token) => {
  try {
    return jwtDecode(token);
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  let location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));

    if (user) {
      const decodedJwt = parseJWT(user);

      if (decodedJwt.exp * 1000 < Date.now()) {
        props.logOut();
      }
    }
  }, [location, props]);
};

export default AuthVerify;
