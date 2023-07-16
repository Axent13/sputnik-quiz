import { Layout, Row, notification } from 'antd';
import LoginModal from 'components/LoginModal/LoginModal';
import RegistrationModal from 'components/RegistrationModal/RegistrationModal';
import React, { useState, useEffect } from 'react';
import styles from './MainPage.module.scss';
import cn from 'classnames';
import WelcomeCard from 'components/WelcomeCard/WelcomeCard';
import authService from 'services/auth.service';
import localStorageService from 'services/localStorage.service';
import { useNavigate } from 'react-router-dom';

interface UserLoginInfoProps {
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

  const [notificationApi, notificationHolder] = notification.useNotification();

  const openNotification = (text: string) => {
    notificationApi.open({
      message: 'Ошибка',
      description: text,
    });
  };

  const submitLoginForm = async (values: UserLoginInfoProps) => {
    try {
      const data = await authService.login(values);
      localStorageService.setTokens(data);
      setIsModalOpened(false);
      navigate('quiz');
    } catch (error) {
      const errorType = error?.response?.data?.error?.message;
      switch (errorType) {
        case 'EMAIL_NOT_FOUND':
          openNotification('Пользователь с таким email и паролем не найден!');
          break;
        default:
          openNotification('Ошибка входа!');
          console.error(error);
      }
    }
  };

  const submitRegistrationForm = async (values: UserLoginInfoProps) => {
    try {
      const data = await authService.register(values);
      localStorageService.setTokens(data);
      setIsModalOpened(false);
      navigate('quiz');
    } catch (error) {
      const errorType = error?.response?.data?.error?.message;
      switch (errorType) {
        case 'EMAIL_EXISTS':
          openNotification('Пользователь с таким email уже зарегистрирован!');
          break;
        case 'WEAK_PASSWORD : Password should be at least 6 characters':
          openNotification('Пароль должен быть не менее 6 символов!');
          break;
        default:
          openNotification('Ошибка регистрации!');
          console.error(error);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <Layout>
      {notificationHolder}
      <Layout.Content>
        {isLogining ? (
          <LoginModal
            onLogin={submitLoginForm}
            onCancel={closeModal}
            isModalOpened={isModalOpened}
            switchFormText='Зарегистрироваться'
            onSwitchForm={() => setIsLogining(false)}
          />
        ) : (
          <RegistrationModal
            onRegistration={submitRegistrationForm}
            onCancel={closeModal}
            isModalOpened={isModalOpened}
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
