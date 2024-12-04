import axios from 'axios';
import secrets from './secrets';
// import JwtService from './JwtService';
// import { useAuth } from '../hooks/useAuth';
// const { refreshToken } = useAuth();

const Axios = () => {
    let api = null;

    if (localStorage.getItem('token')) {
        api = axios.create({
            baseURL: secrets.URL_LARAVEL,
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        });
    } else {
        api = axios.create({
            baseURL: secrets.URL_LARAVEL,
            headers: {
                "Content-type": "application/json",
            }
        });
    }

    api.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 403) {
                // JwtService.destroyToken();
                window.location.reload();
            }
            return Promise.reject(error);
        }
    );

    return api;
}

export default Axios;