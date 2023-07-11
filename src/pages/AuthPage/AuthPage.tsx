import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div>
      <h1>Страница авторизации</h1>
      <NavLink to='/quiz'>Перейти к квизу</NavLink>
    </div>
  );
};

export default AuthPage;
