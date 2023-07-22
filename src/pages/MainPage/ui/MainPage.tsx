import { Layout, Row } from 'antd';
import { LoginModal } from 'feature/LoginModal/ui/LoginModal';
import { RegistrationModal } from 'feature/RegistrationModal/ui/RegistrationModal';
import { useState, useEffect } from 'react';
import styles from './MainPage.module.scss';
import cn from 'classnames';
import { WelcomeCard } from 'widgets/WelcomeCard';
import authService from 'shared/services/auth.service';
import localStorageService from 'shared/services/localStorage.service';
import { useNavigate } from 'react-router-dom';
import { useErrorNotification } from 'shared/hooks/useErrorNotification';

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

  const [notification, notificationHolder] = useErrorNotification();

  const openNotification = (text: string) => {
    notification.open({
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
