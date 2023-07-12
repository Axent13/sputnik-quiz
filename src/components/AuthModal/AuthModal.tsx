import React from 'react';
import { Button, Modal } from 'antd';

interface IAuthModal {
  title: string;
  onOk(): void;
  onCancel(): void;
  okText: string;
  isOpened: boolean;
  children: React.ReactNode;
}

const AuthModal = ({
  title,
  onOk,
  onCancel,
  okText,
  isOpened,
  children,
}: IAuthModal) => {
  return (
    <Modal
      open={isOpened}
      title={title}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <Button key='submit' type='primary' onClick={onOk}>
          {okText}
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
};

export default AuthModal;
