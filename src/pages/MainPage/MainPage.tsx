import { Layout, Row } from 'antd';
import LoginModal from 'components/LoginModal/LoginModal';
import RegistrationModal from 'components/RegistrationModal/RegistrationModal';
import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import cn from 'classnames';
import WelcomeCard from 'components/WelcomeCard/WelcomeCard';
import authService from 'services/auth.service';

interface IUserLoginInfo {
  email: string;
  password: string;
}

const MainPage = () => {
  const [isLogining, setIsLogining] = useState(true);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const submitLoginForm = (values: IUserLoginInfo) => {
    setIsModalOpened(false);
    authService.login(values);
  };

  const submitRegistrationForm = async (values: IUserLoginInfo) => {
    setIsModalOpened(false);
    authService.register(values);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const successingLogin = () => {
    console.log('Success Login!');
  };

  const failingLogin = () => {
    console.log('Login failed...');
  };

  const successingRegistration = () => {
    console.log('Success Registration!');
  };

  const failingRegistration = () => {
    console.log('Registration failed...');
  };

  return (
    <Layout.Content>
      {isLogining ? (
        <LoginModal
          onLogin={submitLoginForm}
          onCancel={closeModal}
          isModalOpened={isModalOpened}
          onFinish={successingLogin}
          onFinishFailed={failingLogin}
          switchFormText='Зарегистрироваться'
          onSwitchForm={() => setIsLogining(false)}
        />
      ) : (
        <RegistrationModal
          onRegistration={submitRegistrationForm}
          onCancel={closeModal}
          isModalOpened={isModalOpened}
          onFinish={successingRegistration}
          onFinishFailed={failingRegistration}
          switchFormText='Войти'
          onSwitchForm={() => setIsLogining(true)}
        />
      )}
      <Row
        align={'middle'}
        justify={'center'}
        className={cn(styles['main-page'])}
      >
        <WelcomeCard
          onClick={() => {
            setIsModalOpened(true);
          }}
        />
      </Row>
    </Layout.Content>
  );
};

export default MainPage;
