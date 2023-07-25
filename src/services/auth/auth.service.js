import axios from "axios";
import jwtDecode from "jwt-decode";

const URL = "https://dolphin-app-4zl3e.ondigitalocean.app/auth/login";

const login = (email, password) => {
  return axios
    .post(URL, {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
};

const authService = {
  login,
  logout,
};

export default authService;
