import { Button, Layout, Row } from 'antd';
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
  const [isLogining, setIsLogining] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const submitLoginForm = (values: IUserLoginInfo) => {
    setIsModalOpened(false);
    console.log('submitting Login data', values);
  };

  const submitRegistrationForm = (values: IUserLoginInfo) => {
    setIsModalOpened(false);
    console.log('submitting Registration data', values);
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
        />
      ) : (
        <RegistrationModal
          onRegistration={submitRegistrationForm}
          onCancel={closeModal}
          isModalOpened={isModalOpened}
          onFinish={successingRegistration}
          onFinishFailed={failingRegistration}
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
