import axios from "axios";
import jwtDecode from "jwt-decode";

const URL = process.env.REACT_APP_AUTH_URL;

const login = (email, password) => {
  return axios
    .post(URL, {
      email,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response.data.statusCode === 500) {
        throw new Error("Invalid email");
      }
      if (error.response.data.statusCode === 400) {
        throw new Error("Invalid password");
      }
      throw new Error("Not login");
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
