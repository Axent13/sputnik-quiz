import { localStorageItems } from 'shared/services/types/localStorage';

const TOKEN_KEY = 'jwt-token';
const REFRESH_KEY = 'jwt-refresh-token';
const EXPIRES_KEY = 'jwt-expires';
const USERID_KEY = 'user-local-id';
const USER_EMAIL = 'user-email';
const EXPIRES_TIME = 3600;

export function setTokens({
  refreshToken,
  idToken,
  localId,
  email,
}: localStorageItems) {
  const expiresDate = new Date().getTime() + EXPIRES_TIME * 1000;
  localStorage.setItem(USERID_KEY, localId);
  localStorage.setItem(TOKEN_KEY, idToken);
  localStorage.setItem(REFRESH_KEY, refreshToken);
  localStorage.setItem(EXPIRES_KEY, expiresDate.toString());
  localStorage.setItem(USER_EMAIL, email);
}

export function getUserEmail() {
  return localStorage.getItem(USER_EMAIL);
}

export function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY);
}

export function removeAuthData() {
  localStorage.removeItem(USERID_KEY);
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
  localStorage.removeItem(EXPIRES_KEY);
  localStorage.removeItem(USER_EMAIL);
}

export function getTokenExpiresDate() {
  return localStorage.getItem(EXPIRES_KEY);
}

export function getUserId() {
  return localStorage.getItem(USERID_KEY);
}

const localStorageService = {
  setTokens,
  getAccessToken,
  getRefreshToken,
  getTokenExpiresDate,
  getUserId,
  removeAuthData,
  getUserEmail,
};

export default localStorageService;
