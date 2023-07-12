import { Button, Layout } from 'antd';
import AuthModal from 'components/AuthModal/AuthModal';
import LoginModal from 'components/LoginModal/LoginModal';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MainPage = () => {
  const [isLogining, setIsLogining] = useState(true);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const submitForm = (values: unknown) => {
    setIsModalOpened(false);
    console.log('submitting data', values);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const sucessingFinish = () => {
    console.log('Success Finish!');
  };

  const failingFinish = () => {
    console.log('Finish failed...');
  };

  return (
    <Layout.Content>
      <LoginModal
        onLogin={submitForm}
        onCancel={closeModal}
        isModalOpened={isModalOpened}
        onFinish={sucessingFinish}
        onFinishFailed={failingFinish}
      />
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
