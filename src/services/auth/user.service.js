import axios from 'axios';
import authHeader from './auth-header';

const URL = 'https://dolphin-app-4zl3e.ondigitalocean.app/auth/login';

const getContent = () => {
    return axios.get(URL, {header: authHeader()});
}

const userService = {
    getContent
}

export default userService;