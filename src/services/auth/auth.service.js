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
      const role = jwtDecode(response.data);
      if( role.role === 'Admin' ) {
        localStorage.setItem("user", JSON.stringify(response.data));
        window.location.reload();
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
