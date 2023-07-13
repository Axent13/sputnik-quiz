import axios from 'axios';
import configFile from '../config.json';
import localStorageService from './localStorage.service';

const httpAuth = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
  params: {
    key: configFile.fireBaseApiKey,
  },
});

interface IUserLoginInfo {
  email: string;
  password: string;
}

const authService = {
  register: async ({ email, password }: IUserLoginInfo) => {
    console.log('in rigister');
    const { data } = await httpAuth.post(`accounts:signUp`, {
      email,
      password,
      returnSecureToken: true,
    });
    console.log('data from authService.register:', data);
    return data;
  },
  login: async ({ email, password }: IUserLoginInfo) => {
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
