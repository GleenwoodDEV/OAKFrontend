import axios from "axios";

const URL = "https://dolphin-app-4zl3e.ondigitalocean.app/auth/login";

const login = (email, password) => {
  return axios
    .post(URL, {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data) {
        console.log(response.data);
        console.log(localStorage);
        //localStorage.setItem("user", JSON.stringify(response.data));
      } else {
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};

export default authService;
