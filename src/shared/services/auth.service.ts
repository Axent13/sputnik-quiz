import axios from 'axios';
import configFile from 'app/config/config.json';
import localStorageService from './localStorage.service';

const httpAuth = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
  params: {
    key: configFile.fireBaseApiKey,
  },
});

interface UserLoginInfoProps {
  email: string;
  password: string;
}

const authService = {
  register: async ({ email, password }: UserLoginInfoProps) => {
    const { data } = await httpAuth.post(`accounts:signUp`, {
      email,
      password,
      returnSecureToken: true,
    });
    return data;
  },
  login: async ({ email, password }: UserLoginInfoProps) => {
    const { data } = await httpAuth.post(`accounts:signInWithPassword`, {
      email,
      password,
      returnSecureToken: true,
    });
    return data;
  },
  refresh: async () => {
    const { data } = await httpAuth.post('token', {
      grant_type: 'refresh_token',
      refresh_token: localStorageService.getRefreshToken(),
    });
    return data;
  },
};

export default authService;
