import { Layout, Row } from 'antd';
import LoginModal from 'components/LoginModal/LoginModal';
import RegistrationModal from 'components/RegistrationModal/RegistrationModal';
import React, { useState, useEffect } from 'react';
import styles from './MainPage.module.scss';
import cn from 'classnames';
import WelcomeCard from 'components/WelcomeCard/WelcomeCard';
import authService from 'services/auth.service';
import localStorageService from 'services/localStorage.service';
import { useNavigate } from 'react-router-dom';

interface IUserLoginInfo {
  email: string;
  password: string;
}

const MainPage = () => {
  const [isLogining, setIsLogining] = useState(true);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = localStorageService.getUserEmail();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('quiz');
    }
  }, []);

  const submitLoginForm = async (values: IUserLoginInfo) => {
    setIsModalOpened(false);
    const data = await authService.login(values);
    localStorageService.setTokens(data);
    navigate('quiz');
  };

  const submitRegistrationForm = async (values: IUserLoginInfo) => {
    setIsModalOpened(false);
    const data = await authService.register(values);
    localStorageService.setTokens(data);
    navigate('quiz');
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
    <Layout>
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
    </Layout>
  );
};

export default MainPage;
