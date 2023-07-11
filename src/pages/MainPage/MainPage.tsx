import { Button, Layout } from 'antd';
import AuthModal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MainPage = () => {
  const [isLogining, setIsLogining] = useState(true);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const submitForm = () => {
    setIsModalOpened(false);
    console.log('submitting data');
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <Layout.Content>
      <AuthModal
        onOk={submitForm}
        onCancel={closeModal}
        title='Регистрация'
        isOpened={isModalOpened}
      >
        <h1>Страница авторизации</h1>
        <NavLink to='/quiz'>Перейти к квизу</NavLink>
      </AuthModal>
      <Button
        type='primary'
        shape='round'
        onClick={() => {
          setIsModalOpened(true);
        }}
      >
        Войти
      </Button>
    </Layout.Content>
  );
};

export default MainPage;
