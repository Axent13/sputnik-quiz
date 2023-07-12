import { Button, Layout, Row } from 'antd';
import LoginModal from 'components/LoginModal/LoginModal';
import RegistrationModal from 'components/RegistrationModal/RegistrationModal';
import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import cn from 'classnames';

const MainPage = () => {
  const [isLogining, setIsLogining] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const submitLoginForm = (values: unknown) => {
    setIsModalOpened(false);
    console.log('submitting Login data', values);
  };

  const submitRegistrationForm = (values: unknown) => {
    setIsModalOpened(false);
    console.log('submitting Registration data', values);
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
        <Button
          type='primary'
          shape='round'
          onClick={() => {
            setIsModalOpened(true);
          }}
        >
          Войти
        </Button>
      </Row>
    </Layout.Content>
  );
};

export default MainPage;
